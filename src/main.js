import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Layout from './components/Layout.vue';

Vue.use(ElementUI);

// 添加路由守卫
router.beforeEach((to, from, next) => {
    // 更新页面标题
    document.title = to.meta.title || '武汉云晨科技 - 专业的前端组件开发服务商';
    
    // 更新 meta 描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', to.meta.description || '武汉云晨科技专注于前端组件开发,提供互联网整合营销、微信公众号、小程序、模版开发等一站式服务,打造小程序公众号一体化微商城管理平台');
    }
    
    // 更新 meta 关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', to.meta.keywords || '前端组件开发,武汉云晨科技,互联网整合营销,微信公众号开发,小程序开发,微商城开发,网站建设,前端框架,Vue组件');
    }
    
    next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
});
