import { BLOCKS, INLINES } from "@contentful/rich-text-types";

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
  const { fields } = node.data.target;
  switch (fields.file.contentType) {
    case 'image/jpeg': return h('VLazyImage', {
      attrs: {
        src: fields.file.url,
        title: fields.title,
        alt: fields.title
      }
    }
    );
  }
}

const customHyperlinkRenderer = (node, key, h, next) => {
  if ((node.data.uri).includes("strava.com/activities")) {
    return h(`StravaEmbed`,
      {
        props: {
          activityUrl: node.data.uri
        }
      }
    )
  } else {
    return h(
      'a',
      {
        key,
        attrs: {
          href: node.data.uri
        }
      },
      next(node.content, key, h, next)
    )
  }
}

const renderNodes = {
  [BLOCKS.EMBEDDED_ENTRY]: customEntryRenderer,
  [BLOCKS.EMBEDDED_ASSET]: customAssetRenderer,
  [INLINES.HYPERLINK]: customHyperlinkRenderer,
}

export default {
  renderNodes
}
