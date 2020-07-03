<template>
  <v-lazy-image :srcset="srcset" :src="source" :src-placeholder="placeholder" :alt="alt"></v-lazy-image>
</template>

<script>
import VLazyImage from 'v-lazy-image';
export default {
  components: {
    VLazyImage
  },
  props: {
    src: String,
    alt: String,
  },
  computed: {
    placeholder() {
      return `${this.src}?w=40`;
    },
    source() {
      return `${this.src}?w=1080`;
    },
    srcset() {
      return `${this.src}?w=640 640w, ${this.src}?w=750 750w, ${this.src}?w=1080 1080w`
    }

  },
};
</script>

<style scoped>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 1s;
  will-change: filter;
  width: 100%;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
