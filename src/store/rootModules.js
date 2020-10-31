import * as types from './action-type'
export default {
    state:{
        token:'',
        ajaxTokens:[],
        menuApi:true,//菜单api
    },
    mutations:{
        [types.SET_MENU_API](state,playod){
            state.menuApi = playod;
        },
        [types.SET_REQUESET_TOKENS](state,playod){
            state.ajaxTokens = [...state.ajaxTokens,playod];
        }
    },
    actions:{
        /**
        * @method
        * @desc: 请求菜单接口
        * @author:  zhangyunjiang
        * @creatDate 2020-10-31 15:16:45
        * @param {obj}  arg
        */
        [types.SET_MENU_API]({commit}, arg){
           const _false = true;
           commit(types.SET_MENU_API,_false)
        }
    },
    modules:{

    }
}