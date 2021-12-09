const state = {
    count: 1,
    theme:true,//主题类型
    nav:false//菜单栏缩放状态
}
const mutations={
    changeNav(state,payload){
        state.nav=!state.nav
    },
    changeTheme(state,payload){
        state.theme=!state.theme
    },
}
const actions={
    //导航栏缩放
    CHANGE_NAV({commit,state},payload){
        commit('changeNav')
    },
    //更改主题
    CHANGE_THEME({commit,state},payload){
        commit('changeTheme')
    }
}
const getters={
    nav:state=>{
        if(state.nav){
            return '展开'
        }else{
            return '缩小'
        }
    },
    theme:state=>{
        if(state.theme){
            return 'black'
        }else{
            return 'white'
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
