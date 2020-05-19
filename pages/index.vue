<template>
  <main>
    <div class="container is-fluid">
      <div class="columns is-desktop is-multiline is-centered">
        <div class="column is-one-quarter" v-for="post in posts" :key="post.fields.slug">
          <nuxt-link :to="post.fields.slug" class="more">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    :src="`https:${post.fields.heroImage.fields.file.url}`"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3>{{ post.fields.title}}</h3>
                  {{ post.fields.description }}
                  <div>
                    <time>{{post.sys.createdAt | formatDate}}</time>
                  </div>
                  <div class="tags">
                    <span
                      class="tag"
                      v-for="(tag, index) in post.fields.tags"
                      :key="`tag-${index}`"
                    >{{tag}}</span>
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
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
    title: "Incrediblefamily блог"
  }
};
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
