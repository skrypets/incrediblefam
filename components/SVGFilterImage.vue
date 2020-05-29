<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="filter hidden">
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" :stdDeviation="deviation" />
        </filter>
      </defs>
    </svg>
    <v-lazy-image
      :src="source"
      :src-placeholder="placeholder"
      :alt="alt"
      :title="alt"
      :thumb="thumb"
      @load="animate"
    ></v-lazy-image>
  </div>
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
    thumb: Boolean,
    blurLevel: {
      type: Number,
      default: 20
    },
    duration: {
      type: Number,
      default: 700
    }
  },
  data: () => ({ rate: 1 }),
  computed: {
    deviation() {
      return this.blurLevel * this.rate;
    },
    placeholder() {
      return `${this.src}?w=40`;
    },
    source() {
      return this.thumb ? `${this.src}?w=666&h=500&fit=crop` : `${this.src}`;
    }

  },
  methods: {
    animate() {
      console.log(this.placeholder)
      const start = Date.now() + this.duration;

      const step = () => {
        const remaining = start - Date.now();

        if (remaining < 0) {
          this.rate = 0;
        } else {
          this.rate = remaining / this.duration;
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }
};
</script>

<style scoped>
.filter {
  display: none;
}

.v-lazy-image {
  width: 100%;
  filter: url("#blur");
}
</style>
