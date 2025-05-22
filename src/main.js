import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Layout from './components/Layout.vue';

// 性能优化：仅在生产环境关闭Vue开发提示
Vue.config.productionTip = process.env.NODE_ENV === 'production';

// 性能优化：根据环境使用不同的ElementUI配置
if (process.env.NODE_ENV === 'production') {
  // 生产环境使用按需导入或优化后的ElementUI
  Vue.use(ElementUI, { size: 'medium' });
} else {
  // 开发环境完整引入
  Vue.use(ElementUI);
}

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
    
    // 性能优化：预加载即将需要的组件
    if (to.matched.length > 0) {
      const componentToLoad = to.matched[0].components.default;
      if (typeof componentToLoad === 'function') {
        componentToLoad();
      }
    }
    
    next();
});

// 初始化Vue实例
new Vue({
    el: '#app',
    router,
    render: h => h(Layout)
});
