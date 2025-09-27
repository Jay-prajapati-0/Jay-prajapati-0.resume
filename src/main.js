import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // <- make sure path is correct
import './assets/styles.css';

const app = createApp(App);

app.use(router); // IMPORTANT: install the router
app.mount('#app');


