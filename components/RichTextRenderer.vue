
<template>
  <div>
    <RichText :document="richText" :nodeRenderers="renderNodes()" />
  </div>
</template>
<script>

import RichText from 'contentful-rich-text-vue-renderer';
import richtextRenderers from '../helpers'
import SphereViewer from './SphereViewer';
import StravaEmbed from './StravaEmbed';
import VLazyImage from "v-lazy-image";

export default {
  components: {
    RichText,
    SphereViewer,
    StravaEmbed,
    VLazyImage
  },
  props: ['richText'],
  methods: {
    renderNodes() {
      return richtextRenderers.renderNodes
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  background:
  linear-gradient(
    to bottom, #ff9800 0%,
    #ff9800 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 2px;
  color: inherit;
  text-decoration: none;
  transition: all .3s;
  padding: 0 1px;
}

a:hover {
  background-size: 4px 50px;
  color: #fff;
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}

</style>

