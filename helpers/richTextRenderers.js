import { BLOCKS } from "@contentful/rich-text-types";

const customEntryRenderer = function (node, key, h) {
  const { sys, fields } = node.data.target;
  switch (sys.contentType.sys.id) {
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

const customAssetRenderer = function (node, key, h) {
  // return h(`<img class="img-fluid" src="${node.data.target.fields.file.url}"/>`)
  // switch(sys.contentType.sys.id) {
  //   case 'sphereImage':
  //     return h('SphereViewer',
  //     {
  //       props: {
  //         panoramas: fields.panoramas
  //       }
  //     }
  //   );
  // }
}

const renderNodes = {
  [BLOCKS.EMBEDDED_ENTRY]: customEntryRenderer,
  [BLOCKS.EMBEDDED_ASSET]: customAssetRenderer
}

export default {
  renderNodes
}
