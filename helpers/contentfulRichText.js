import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
      let obj = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'sphereImage':
          return createElement("PhotoSphere", {
            props: {
              imgUrl: `${obj.image.fields.file.url}`
            }
          });

        // `<img src=''></img>`
      }
    }
  }
}

export default (richText) => documentToHtmlString(richText, options);