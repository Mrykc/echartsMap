const routes = [
    {
        path: '/home',
        name: '首页',
        icon:'el-icon-s-home',
        children: [
        ]
    },
    {
        path:'/components',
        name:'组件',
        icon:'el-icon-menu',
        children: [
            {
                path: '/map',
                name: '地图',
                icon:'el-icon-location'
            },
            {
                path: '/cesium',
                name: '3D地球',
                icon:'el-icon-map-location'
            },
            {
                path: '/three',
                name: 'three',
                icon:'el-icon-map-location'
            }
        ]
    }
]


export default routes
