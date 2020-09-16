import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/dashboard'
    },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件', roles: ['000', '001'] },
            children: [{
                path: '/dashboard',
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                meta: { title: '系统首页'}
            },
                {
                    path: '/icon',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标', roles: ['000', '001'] }

                }, {
                    path: '/clubActivity',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/clubActivity'),
                    meta: { title: '社团活动管理' }
                },
                {
                    path: '/info',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/info'),
                    meta: { title: '校园百科' }
                },

                {
                    path: '/viewpager',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/viewpager'),
                    meta: { title: '轮播图' }
                },
                {
                    path: '/school',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/school'),
                    meta: { title: '学校' }
                },
                {
                    path: '/user',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/user'),
                    meta: { title: '用户展示' }
                },
                {
                    path: '/business',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/views/business'),
                    meta: { title: '优质服务管理' }
                }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});