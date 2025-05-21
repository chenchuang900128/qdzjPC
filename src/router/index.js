import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Fruit from '../components/Fruit'
import Fashion from '../components/Fashion'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                title: '前端组件开发 - 专业的前端组件开发服务商',
                description: '武汉云晨科技专注于前端组件开发,提供互联网整合营销、微信公众号、小程序、模版开发等一站式服务,打造小程序公众号一体化微商城管理平台',
                keywords: '前端组件开发,武汉云晨科技,互联网整合营销,微信公众号开发,小程序开发,微商城开发,网站建设,前端框架,Vue组件'
            }
        },
        {
            path: '/fruit',
            name: 'Fruit',
            component: Fruit,
            meta: {
                title: '生鲜果蔬解决方案 - 武汉云晨科技',
                description: '武汉云晨科技提供专业的生鲜果蔬行业解决方案，包括配送范围管理、配送路径优化、线上优惠券系统等全方位服务',
                keywords: '生鲜果蔬,配送管理,优惠券系统,武汉云晨科技,生鲜配送解决方案'
            }
        },
        {
            path: '/fashion',
            name: 'Fashion',
            component: Fashion,
            meta: {
                title: '服装品牌解决方案 - 武汉云晨科技',
                description: '武汉云晨科技为服装品牌提供专业的线上解决方案，助力品牌数字化转型，包括品牌展示、在线商城、会员管理等全方位服务',
                keywords: '服装品牌,品牌数字化,武汉云晨科技,服装行业解决方案,品牌线上化'
            }
        }
    ]
})
