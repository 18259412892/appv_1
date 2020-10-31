import store from '@/store/index.js'
export default {
    'cancleaTokens':async function (to, from, next) {
        const tokens = store.state.ajaxTokens;
        tokens.forEach(fn => fn())
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