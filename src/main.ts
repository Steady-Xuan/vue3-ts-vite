import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// App.use
// import './styles/index.scss'
import 'reset-css'
import store from "./store/index"



createApp(App).use(ElementPlus, { locale: zhCn, size: 'small', zIndex: 3000 }).use(store).use(router).mount('#app')
