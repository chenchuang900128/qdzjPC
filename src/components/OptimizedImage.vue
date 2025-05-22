<template>
  <div class="optimized-image-container" :style="containerStyle">
    <!-- 低质量占位图 -->
    <img 
      v-if="placeholderSrc && !loaded" 
      :src="placeholderSrc" 
      :alt="alt" 
      class="placeholder-image"
      :style="imgStyle"
    />
    
    <!-- 主图 -->
    <img 
      ref="mainImage"
      :data-src="src" 
      :src="loaded ? src : ''" 
      :alt="alt" 
      class="main-image"
      :class="{'loaded': loaded}"
      @load="onImageLoaded"
      :style="imgStyle"
    />
    
    <!-- 加载中效果 -->
    <div v-if="!loaded && !placeholderSrc" class="loading-placeholder" :style="imgStyle">
      <span>加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptimizedImage',
  
  props: {
    src: {
      type: String,
      required: true
    },
    placeholderSrc: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: '图片'
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: 'auto'
    },
    objectFit: {
      type: String,
      default: 'cover'
    }
  },
  
  data() {
    return {
      loaded: false,
      observer: null
    }
  },
  
  computed: {
    containerStyle() {
      return {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height
      }
    },
    imgStyle() {
      return {
        objectFit: this.objectFit
      }
    }
  },
  
  mounted() {
    // 使用 IntersectionObserver 实现懒加载
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(this.onIntersect, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });
      
      this.observer.observe(this.$refs.mainImage);
    } else {
      // 回退方案：直接加载图片
      this.loadImage();
    }
  },
  
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  
  methods: {
    onIntersect(entries) {
      const isIntersecting = entries.some(entry => entry.isIntersecting);
      
      if (isIntersecting) {
        this.loadImage();
        this.observer.disconnect();
      }
    },
    
    loadImage() {
      const mainImage = this.$refs.mainImage;
      if (mainImage) {
        mainImage.src = mainImage.dataset.src;
      }
    },
    
    onImageLoaded() {
      this.loaded = true;
      this.$emit('loaded');
    }
  }
}
</script>

<style scoped>
.optimized-image-container {
  position: relative;
  overflow: hidden;
}

.main-image,
.placeholder-image,
.loading-placeholder {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.main-image {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.main-image.loaded {
  opacity: 1;
}

.loading-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999;
  font-size: 14px;
}

.placeholder-image {
  filter: blur(10px);
  transform: scale(1.05);
}
</style> 