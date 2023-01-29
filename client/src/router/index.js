import { createRouter, createWebHistory } from 'vue-router';
import NotesView from '@/views/NotesView';
import NoteView from '@/views/NoteView';
import NotFoundView from '@/views/NotFoundView';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/notes/:id',
    name: 'note',
    component: NoteView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  },
  routes
})

export default router;
