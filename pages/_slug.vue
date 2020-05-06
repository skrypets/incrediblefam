<template>
  <section>
    <div class="section columns is-centered">
      <div class="column is-half">
        <p class="back">
          <nuxt-link exact to="/">⟵ Повернутися</nuxt-link>
        </p>
      </div>
    </div>
    <div
      class="hero is-medium is-dark is-bold"
      :style="
        `background-image: url(https:${post.fields.heroImage.fields.file.url})`
      "
      :title="`${post.fields.heroImage.fields.title}`"
    >
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">{{ post.fields.title }}</h1>
          <!-- <h2 class="subtitle">Hero subtitle</h2> -->
        </div>
      </div>
    </div>
    <div class="post-author has-text-centered">
      <img
        class="avatar"
        :src="post.fields.author.fields.avatar.fields.file.url"
        :alt="post.fields.author.fields.avatar.fields.title"
      />
      <p class="author">автор: {{ post.fields.author.fields.fullName }}</p>
      <p class="published">{{ post.fields.publishDate | formatDate }}</p>
    </div>
    <div class="section columns is-centered">
      <div class="column is-half">
        <article class="content" v-html="$md.render(post.fields.body)"></article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

article::first-letter {
  float: left;
  font-size: 5em;
  line-height: 0.8em;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 4px;
}

.post-author {
  bottom: 0;
  img {
      width: 70px;
      border-radius: 50px;
      border: 2px solid #fff;
      background-color: #fff;
      transform: translate(0, -40%);
      margin-bottom: -30px;
  }
}
.hero {
  background-attachment: fixed !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% auto !important;
  height: 300px;
}
.back {
  margin-top: 20px;
}

</style>
