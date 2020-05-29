<template>
  <section class="section">
    <div class="columns is-desktop is-multiline is-centered">
      <div class="column is-one-quarter" v-for="post in orderedPosts" :key="post.fields.slug">
        <nuxt-link :to="post.fields.slug + '/'" class="more">
          <div class="card">
            <div class="card-image card-zoom">
              <figure class="image is-4by3">
                <BlurImage
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
import orderBy from 'lodash/orderBy';
import BlurImage from '../components/BlurImage';
export default {
  components: {
    BlurImage
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    orderedPosts () {
      return orderBy(this.posts, function(post) {
        return new Date(post.fields.publishDate);
      }, 'desc');
    },
  },
  head: {
    title: "Incredible Family блог"
  }
};
</script>

<style lang="scss" scoped>
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
</style>
<style lang="scss">
.card-zoom {
  img {
    width: auto;
    object-fit: cover;
  }
}
.column :hover {
  .card-zoom {
    img {
      transform: scale(1.3);
      transition: transform .5s;
    }
  }
}
</style>
