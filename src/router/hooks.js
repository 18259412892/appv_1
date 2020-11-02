import store from '@/store/index.js';
import * as types from '@/store/action-type.js'
export default {
    'cancleaTokens':async function (to, from, next) {
        store.state.ajaxTokens.forEach(fn=> fn && fn());
        store.commit(types.SET_REQUESET_TOKENS,'clear');
        next();
    },
    'isLogin': async function (to, form, next) {
        if (store.state.token) {
            if (to.path === '/login') {
                next('/')
            } else {
                next()
            }

        } else {
            let needLogin = to.matched.some(item => item.meta.needLogin);
            if (needLogin) {
                next('/login')
            } else {
                next()
            }
        }
    }
}