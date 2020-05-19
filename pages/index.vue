<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns is-desktop is-multiline is-centered">
        <div class="column is-one-quarter" v-for="post in orderedPosts" :key="post.fields.slug">
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
  </section>
</template>

<script>
import sortBy from 'lodash/sortBy';
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    orderedPosts: function () {
      return sortBy(this.posts, function(p) {
        return new Date(p.sys.createdAt);
      })
    }
  },
  head: {
    title: "Incredible Family блог"
  }
};
</script>

<style lang="scss" scoped>
.column :hover {
  img {
    transform: scale(1.3);
    transition: transform .2s;
  }
}
.card-image {
  overflow: hidden;
}

img {
  object-fit: cover;
}
</style>
