import { createStore } from 'vuex';
import login from "./module/login"

export default createStore({
    modules: {
        login
    }
})