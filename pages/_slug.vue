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
    return {
      title: this.post.fields.title
    };
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 20px;
}
</style>
