<template>
  <section class="post-author has-text-centered">
    <img
      class="avatar"
      :src="authorData.avatar.fields.file.url"
      :alt="authorData.avatar.fields.title"
    />
    <p class="author">автор: {{ authorData.fullName }}</p>
  </section>
</template>
<script>
export default {
  props: ['author'],
  data () {
    return {
      authorData: this.author
    }
  }
}
</script>

<style lang="scss" scoped>
.post-author {
  bottom: 0;
  img {
      width: 70px;
      border-radius: 50px;
      border: 2px solid #333;
      background-color: #fff;
      transform: translate(0, -40%);
      margin-bottom: -30px;
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)
  }
}
</style>
