import { createApp } from 'vue';
import App from './App.vue';
import VueTheMask from 'vue-the-mask';
import router from './router/router';

const app = createApp(App);
app.use(router);
app.use(VueTheMask);
app.mount('#app');