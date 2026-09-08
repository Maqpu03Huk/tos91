import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../loyouts/DefaultLayout.vue'

import home from '../page/home.vue'
import toslive from '../page/tos-life.vue'
import cooperation from '../page/cooperetion.vue'
import projects from '../page/projects.vue'
import documents from '../page/documents.vue'
import ukInteraction from '../page/uk-interaction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: DefaultLayout,
    children: [
      {path: '', component: home},
      {path: 'tos-live', component: toslive},
      {path: 'cooperation', component: cooperation},
      {path: 'projects', component: projects},
      {path: 'documents', component: documents},
      {path: 'uk-interaction', component: ukInteraction},
    ]
  }],
})

export default router
