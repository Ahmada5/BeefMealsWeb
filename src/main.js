import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App);
app.use(router)
app.use(vuetify)

app.mount('#app')