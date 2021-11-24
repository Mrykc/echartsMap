const routes = [
    {
        path: '/home',
        name: '首页',
        icon:'el-icon-menu',
        children: [
        ]
    },
    {
        path:'/components',
        name:'组件',
        children: [
            {
                path: '/map',
                name: '地图',
                icon:'el-icon-location'
            }
        ]
    }
]


export default routes
