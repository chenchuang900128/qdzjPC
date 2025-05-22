<template>
  <div style="display:none;">
    <!-- 这个组件不会渲染任何可见内容 -->
  </div>
</template>

<script>
export default {
  name: 'SeoHead',
  
  props: {
    title: {
      type: String,
      default: '武汉云晨科技 - 专业的前端组件开发服务商'
    },
    description: {
      type: String,
      default: '武汉云晨科技专注于前端组件开发,提供互联网整合营销、微信公众号、小程序、模版开发等一站式服务,打造小程序公众号一体化微商城管理平台'
    },
    keywords: {
      type: String,
      default: '前端组件开发,武汉云晨科技,互联网整合营销,微信公众号开发,小程序开发,微商城开发,网站建设,前端框架,Vue组件'
    },
    canonicalUrl: {
      type: String,
      default: ''
    },
    ogType: {
      type: String,
      default: 'website'
    },
    ogImage: {
      type: String,
      default: ''
    }
  },
  
  mounted() {
    this.updateMetaTags();
  },
  
  watch: {
    title() {
      this.updateMetaTags();
    },
    description() {
      this.updateMetaTags();
    },
    keywords() {
      this.updateMetaTags();
    },
    canonicalUrl() {
      this.updateCanonical();
    },
    ogType() {
      this.updateOpenGraph();
    },
    ogImage() {
      this.updateOpenGraph();
    }
  },
  
  methods: {
    updateMetaTags() {
      // 更新标题
      document.title = this.title;
      
      // 更新描述
      this.updateOrCreateMetaTag('description', this.description);
      
      // 更新关键词
      this.updateOrCreateMetaTag('keywords', this.keywords);
      
      // 更新Open Graph标签
      this.updateOpenGraph();
      
      // 更新canonical链接
      this.updateCanonical();
      
      // 更新结构化数据
      this.updateStructuredData();
    },
    
    updateOrCreateMetaTag(name, content) {
      let meta = document.querySelector(`meta[name="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    },
    
    updateOpenGraph() {
      // OG标题
      this.updateOrCreateMetaProperty('og:title', this.title);
      
      // OG描述
      this.updateOrCreateMetaProperty('og:description', this.description);
      
      // OG类型
      this.updateOrCreateMetaProperty('og:type', this.ogType);
      
      // OG图片
      if (this.ogImage) {
        this.updateOrCreateMetaProperty('og:image', this.ogImage);
      }
      
      // OG网址
      const url = this.canonicalUrl || window.location.href;
      this.updateOrCreateMetaProperty('og:url', url);
      
      // Twitter卡片
      this.updateOrCreateMetaProperty('twitter:card', 'summary_large_image');
      this.updateOrCreateMetaProperty('twitter:title', this.title);
      this.updateOrCreateMetaProperty('twitter:description', this.description);
      if (this.ogImage) {
        this.updateOrCreateMetaProperty('twitter:image', this.ogImage);
      }
    },
    
    updateOrCreateMetaProperty(property, content) {
      let meta = document.querySelector(`meta[property="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    },
    
    updateCanonical() {
      if (!this.canonicalUrl) return;
      
      let link = document.querySelector('link[rel="canonical"]');
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', this.canonicalUrl);
    },
    
    updateStructuredData() {
      // 删除旧的结构化数据
      const existingScript = document.querySelector('script[data-seo="structured-data"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // 创建新的结构化数据
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo', 'structured-data');
      
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': '武汉云晨科技',
        'url': window.location.origin,
        'logo': this.ogImage || `${window.location.origin}/logo.png`,
        'description': this.description,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': '武汉'
        }
      };
      
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
}
</script> 