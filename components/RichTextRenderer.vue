
<template>
  <div>
    <RichText :document="richText" :nodeRenderers="renderNodes()" />
  </div>
</template>
<script>
import { BLOCKS } from "@contentful/rich-text-types";
import RichText from 'contentful-rich-text-vue-renderer';
import SphereViewer from './SphereViewer';

const customRenderFunction =  function(node, key, h) {
  const { sys, fields } = node.data.target;
  switch(sys.contentType.sys.id) {
    case 'sphereImage':
      return h('SphereViewer',
      {
        props: {
          panoramas: fields.panoramas
        }
      }
    );
  }
}

const renderNode = {
  [BLOCKS.EMBEDDED_ENTRY]: customRenderFunction
}

export default {
  components: {
    RichText,
    SphereViewer
  },
  props: ['richText'],
  methods: {
    renderNodes() {
      return {
        [BLOCKS.EMBEDDED_ENTRY]: customRenderFunction
     }
    }
  }

}
</script>

