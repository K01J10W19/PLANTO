import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router/index.js'
import { vReveal } from './directives/reveal.js'
import './styles/main.css'

createApp(App).use(router).use(createHead()).directive('reveal', vReveal).mount('#app')
