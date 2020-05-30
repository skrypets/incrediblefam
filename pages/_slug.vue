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
    },
    canonical() {
      return `https://www.incrediblefam.com${this.$route.path}`
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      link:[
        { rel: 'canonical', href: this.canonical }
      ],
      meta: [
        { name: 'description', content: this.post.fields.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: this.canonical },
        { property: 'og:title', content: this.post.fields.title },
        { property: 'og:description', content: this.post.fields.description },
        { property: 'og:image', content: `https:${this.post.fields.heroImage.fields.file.url}?w=1080` },
        { property: 'og:image:alt', content: this.post.fields.heroImage.fields.title },
        { property: 'og:locale', content: 'uk_UA' },
      ]
    };
  },
  jsonld() {
    const { title, tags, heroImage, publishDate, richText, author } = this.post.fields;
    const dateModified  = this.post.sys.updatedAt;
    return {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": this.canonical
      },
      'datePublished': publishDate,
      'headline': title,
      'articleBody': richText.content[0].content[0].value,
      'image': `https:${heroImage.fields.file.url}?w=1080`,
      "author": {
        "@type": "Person",
        "name": author.fields.fullName,
      },
      "publisher": {
        "@type": "Person",
        "name": author.fields.fullName,
      },
      'dateModified': dateModified,
      'keywords': tags.join(','),
    };
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 20px;
}
</style>
