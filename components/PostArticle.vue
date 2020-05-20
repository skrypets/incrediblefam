<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-half is-paddingless">
        <nuxt-link exact to="/">⟵ Повернутися</nuxt-link>
        <div class="is-pulled-right">
          <p class="published">{{ post.publishDate | formatDate }}</p>
        </div>
        <article class="content has-text-justified">
          <RichTextRenderer :richText="this.post.richText" />
        </article>
        <nuxt-link exact to="/">⟵ Повернутися</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import RichTextRenderer from './RichTextRenderer';
import SphereViewer from './SphereViewer';

export default {
  components: {
     RichTextRenderer,
     SphereViewer
  },
  props: ['post'],
  data () {
    return {
      postData: this.post
    }
  },

}
</script>

<style lang="scss" scoped>
article::first-letter {
  float: left;
  font-size: 5em;
  line-height: 0.8em;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 4px;
}

article {
   margin-top: 2em;
}
</style>
