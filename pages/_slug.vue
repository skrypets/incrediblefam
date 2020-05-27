<template>
  <div>
    <hero-banner :post="post.fields"></hero-banner>
    <post-author :author="post.fields.author.fields"></post-author>
    <post-article :post="post.fields"></post-article>
  </div>
</template>

<script>
import HeroBanner from '../components/HeroBanner'
import PostAuthor from '../components/PostAuthor'
import PostArticle from '../components/PostArticle'
export default {
  components: {
    HeroBanner,
    PostAuthor,
    PostArticle
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      return post[0];
    }
  },
  head() {
    let canonical = `https://incrediblefam.com${this.$route.path}`
    return {
      title: this.post.fields.title,
      link:[
        { rel: 'canonical', href: canonical
      }],
      meta: [
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: canonical},
        {property: 'og:title', content: this.post.fields.title},
        {property: 'og:description', content: this.post.fields.description},
        {property: 'og:image', content: `https:${this.post.fields.heroImage.fields.file.url}`},
        {property: 'og:image:alt', content: this.post.fields.heroImage.fields.title},
        {property: 'og:locale', content: 'uk_UA'},
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 20px;
}
</style>
