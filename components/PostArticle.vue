<template>
  <section class="section columns is-centered">
    <div class="column is-half">
      <nuxt-link exact to="/">⟵ Повернутися</nuxt-link>
      <div class="is-centered">
        <p class="published">{{ post.publishDate | formatDate }}</p>
      </div>

      <!-- <article class="content" v-html="$md.render(post.body)"></article> -->
      <!-- <article class="content" v-html="richText"></article> -->

      <!-- <article class="content">
        <RichTextRenderer :richText="this.post.richText" />
      </article>-->

      <SphereViewer />

      <nuxt-link exact to="/">⟵ Повернутися</nuxt-link>
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
</style>
