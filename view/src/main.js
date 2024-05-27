import { createApp } from 'vue'
import App from './App.vue'

// BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional: BootstrapVue 3 스타일시트 임포트
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

// BootstrapVue 3 사용
app.use(BootstrapVue3)

app.mount('#app')