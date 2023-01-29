export default (cb = () => {}, timeout = 1000) => {
  return new Promise(resolve => {
    let timer = null;

    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
      resolve();
    }, timeout);
  })
}