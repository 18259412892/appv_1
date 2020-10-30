import axios from 'axios';
import qs from 'qs';
import {message} from 'ant-design-vue';
class HttpRequset{
    constructor(props){
        // const _VUE_APP_URL_METOURL = process.env.VUE_APP_UR
        // VUE_APP_API_
        this.baseURL = '';
        this.timeout = 1000*3;//请求超时
        this.queue = {};//队列
    }
    setInterceptors(instance,url){
        instance.interceptors.request.use(config=>{
            if(Object.keys(this.queue).length == 0){
                // true
            }
            this.queue[url] = true;
            let Cancel = axios.CancelToken;
            config.CancelToken = new Cancel(function(c){
                //请求切换断开接口
            });
            config.headers.common['Authorization'] = 'Bearer '  +'tokens345345354543';
            return config;
        });

        instance.interceptors.response.use(res=>{
            delete this.queue[url];
            if(res.code == 200){
                return Promise.resolve(res.data)
            }else{
                return Promise.reject(res)
            }
        },err=>{
            delete this.queue[url];

            //处理其他异常状态
            return Promise.reject(err)
        })
    }
    mergeOptions(options){
        return{
            baseURL:this.baseURL,
            timeout:this.timeout,
            ...options
        }
    }
    requset(options){
        const instace = axios.create();
        let opts = this.mergeOptions(options);
        const _URL = opts.url.split('/')[1];
        const _API_URL = `${process.env['VUE_APP_API_'+_URL.toUpperCase()]}`;
        this.baseURL = _API_URL;
        const {method = 'post'} = opts;
        console.log(_API_URL,'--_API_URL');
        let pattern = localStorage.getItem('pattern')
        if (pattern == 'ucs') {
            opts[ method == 'get' ? 'params' : 'data']['user_token'] = '44'
            if (opts.url.search("/member/") != -1) {
                opts.url = opts.url.replace('/member/', "/ucs/")
            }
        } else {
            opts[ method == 'get' ? 'params' : 'data']['member_token'] = '333'
            if (opts.url.search("/ucs") != -1) {
                opts.url = opts.url.replace('/ucs/', "/member/")
            }
        }
        if(method == 'get'){
            opts['params'] = opts.params || {};
        }else if(method == 'post'){
            opts['data'] = opts.data||{};
            opts['data']['member_token'] = '333'
        }
        this.setInterceptors(instace,opts.url);
        return instace(opts);
    }
    get(url,config={}){
        return this.requset({
            method:'get',
            url,
            params:{
                ...config
            }
        })
    }
    post(url,data={}){
        return this.requset({
            method:'post',
            url,
            data:qs.parse(data)
        })
    }
}
export default new HttpRequset;