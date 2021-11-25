import axios from 'axios'
import {MessageBox, Message, Loading} from 'element-ui'

const loading = {
    loadingInstance: null, // Loading实例
    open: function () { // 打开加载
        if (this.loadingInstance === null) { // 创建单例, 防止切换路由重复加载
            this.loadingInstance = Loading.service({
                text: '拼命加载中',
                target: '.main',
                background: 'rgba(0, 0, 0, 0.5)' // 加载效果
            })
        }
    },
    close: function () { // 关闭加载
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null // 关闭后实例重新赋值null, 下次让它重新创建
    }
}

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = {
    rest: axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 50000
    })
}

// rest拦截器
service.rest.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer 123';
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value = config.params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof (value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    if(!config.l){
        loading.open()
    }
    return config
}, error => {
    Promise.reject(error)
})

// rest响应拦截器
service.rest.interceptors.response.use(res => {
        if (res.status === 200) {
            loading.close()
            return res.data;
        }else if(res.status === 404){
            loading.close()
            return
        } else {
            loading.close()
            Message({
                message: '系统接口异常',
                type: 'error',
                duration: 3 * 1000
            })
            return Promise.reject(res)
        }
    },
    error => {
        loading.close()
        let {message} = error;
        if (message == "Network Error") {
            Message({
                message: "网络连接错误，请检查网络",
                type: 'error',
                duration: 3 * 1000
            })
        } else if (message.includes("timeout")) {
            Message({
                message: '系统接口请求超时',
                type: 'error',
                duration: 3 * 1000
            })
        } else if (message.includes("Request failed with status code 401")) {
            if (window.config.env === "dev") {
                MessageBox.confirm('登录状态已过期或权限发生变化', '系统提示', {
                    confirmButtonText: '重新登录',
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    type: 'warning'
                }).then(() => {

                })
            } else {
                MessageBox.confirm('登录状态已过期或权限发生变化', '系统提示', {
                    confirmButtonText: '重新登录',
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    type: 'warning'
                }).then(() => {

                })
            }
        }
        return Promise.reject(error)
    }
)

export default service
