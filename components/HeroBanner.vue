<template>
  <section
    class="hero is-medium"
    :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https:${postData.heroImage.fields.file.url})`"
    :title="`${postData.heroImage.fields.title}`"
  >
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title has-text-white">{{ postData.title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      postData: this.post
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-attachment: fixed !important;
  background-position: center;
  background-size: cover;
  background-size: 100% auto !important;
  background: none;
  height: 300px !important;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
  );
  background-repeat: no-repeat;
}
</style>
