require('./bootstrap');

import { createApp } from 'vue'
import PostsIndex from './components/Posts/Index'

const app = createApp({})
app.component('posts-index', PostsIndex)
app.mount('#app')
