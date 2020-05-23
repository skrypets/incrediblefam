<template>
  <section class="section">
    <div class="columns is-desktop is-multiline is-centered">
      <div class="column is-one-quarter" v-for="post in sortedPosts" :key="post.fields.slug">
        <nuxt-link :to="post.fields.slug" class="more">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="`https:${post.fields.heroImage.fields.file.url}`"
                  :alt="post.fields.heroImage.fields.title"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h3>{{ post.fields.title}}</h3>
                {{ post.fields.description }}
                <div>
                  <time>{{post.fields.publishDate | formatDate}}</time>
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
  </section>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts;
    },
    sortedPosts () {
      return this.posts.slice().sort((a, b) => {
        let dateA = new Date(a.fields.publishedAt);
        let dateB = new Date(b.fields.publishedAt);
        return dateA - dateB;
      });
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
    transition: transform .5s;
  }
}
.card {
  transition: transform .4s, box-shadow .4s;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px -1px 100px 0px rgba(0, 0, 0, 0.1);
  }
}
.card-image {
  overflow: hidden;
}

img {
  object-fit: cover;
}
</style>
