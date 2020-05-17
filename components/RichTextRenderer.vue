
<template>
  <div>
    <RichText :document="richText" :nodeRenderers="renderNodes()" />
  </div>
</template>
<script>

import RichText from 'contentful-rich-text-vue-renderer';
import richtextRenderers from '../helpers'
import SphereViewer from './SphereViewer';

export default {
  components: {
    RichText,
    SphereViewer
  },
  props: ['richText'],
  methods: {
    renderNodes() {
      return richtextRenderers.renderNodes
    }
  }
}
</script>

