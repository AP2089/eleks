const path = require('path');
const jsonServer = require('json-server');
const getResponse = require('./helpers/getResponse');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const productionPath = path.join(__dirname, '..', 'public');
const developmentPath = path.join(__dirname);
const publicPath = process.env.VITE_APP_NODE_ENV === 'production' ? productionPath : developmentPath;

const middlewares = jsonServer.defaults({
  static: publicPath
});

const port = process.env.PORT || 9000;

server.use(middlewares);

router.render = (req, res) => {
  const pathname = req._parsedUrl.pathname;
  const result = res.locals.data;
  let response = result;

  if (req.method === 'GET') {
    if (/notes$/.test(pathname)) {
      response = getResponse('notes', result);
    } else if (/notes\/\d+$/.test(pathname)) {
      response = getResponse('note', result);
    }
  }

  res.jsonp(response);
}

server.use('/api', router);

server.listen(port, () => {
  if (process.env.VITE_APP_NODE_ENV === 'production') {
    console.log(`App running at \x1b[36m${process.env.VITE_APP_SERVER_URL}\x1b[0m`);
  } else {
    console.log(`Server running on port ${port}`);
  } 
});