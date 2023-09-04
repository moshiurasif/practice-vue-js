import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$filters = {
  snippet(val) {
    if (!val || typeof val !== 'string') return '';
    val = val.slice(0, 50);
    return val;
  }
};

app.mount('#app');
