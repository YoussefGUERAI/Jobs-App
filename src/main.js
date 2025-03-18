import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
// Import Components 
import Home from './components/Home.vue';
import AddJob from './components/AddJobs.vue';
import JobDetail from './components/JobDetail.vue';
import EditJob from './components/EditJob.vue';

const routes = [
    { path: '/', component : Home},
    {path: '/add',component: AddJob},
    {path: '/jobs/:id', component: JobDetail , props:true},
    {path: '/jobs/:id', component:EditJob , props:true}

];
const router = createRouter({
    history: createWebHistory(),
    routes
});
const app = createApp(App);
app.use(router);
app.mount('#app')

