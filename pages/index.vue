<template>
  <main>
    <section class="container" v-for="post in posts" :key="post.fields.slug">
      {{post.sys.createdAt}}
      <div
        class="image"
        :style="
            `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
          "
      ></div>
      <h2 class="title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <p class="description">
        {{ post.fields.description }}
        <br />
        <nuxt-link :to="post.fields.slug" class="more">Читати ⟶</nuxt-link>
      </p>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  head: {
    title: "Incrediblefamily нові блог"
  }
};
</script>

<style lang="scss" scoped>
</style>
