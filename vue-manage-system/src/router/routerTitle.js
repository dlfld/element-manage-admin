//获取标签页面列表
export function getTitles() {
    return [{
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
        {
            icon: 'el-icon-lx-home',
            index: 'icon',
            title: '自定义图标'
        }, {
            icon: 'el-icon-lx-group',
            index: 'clubActivity',
            title: '社团活动管理'
        },
        {
            icon: 'el-icon-lx-searchlist',
            index: 'info',
            title: '校园百科管理'
        },

        {
            icon: 'el-icon-lx-read',
            index: 'viewpager',
            title: '轮播图'
        },
        {
            icon: 'el-icon-lx-location',
            index: 'school',
            title: '学校管理'
        },
        {
            icon: 'el-icon-lx-friend',
            index: 'user',
            title: '用户展示'
        },
        {
            icon: 'el-icon-lx-shop',
            index: 'business',
            title: '优质服务管理'
        }
    ];
}