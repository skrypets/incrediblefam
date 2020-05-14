
<template>
  <div>
    <RichTextRenderer :document="richText" :nodeRenderers="renderNodes" />
  </div>
</template>
<script>
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const sphereEmbeddedEntry = (node, key, h) => {
  return h('h1', { key: key, to: 'link to embedded entry' }, 'content for the <Link> component');
};

export default {
  components: {
    RichTextRenderer
  },
  props: ['richText'],
  methods: {
    renderNodes() {
      return {
        [BLOCKS.EMBEDDED_ENTRY]: sphereEmbeddedEntry,
     }
    }
  }

}
</script>

