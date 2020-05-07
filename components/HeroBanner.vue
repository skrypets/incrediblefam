<template>
  <section
    class="hero is-medium is-fullheight-with-navbar"
    :style="
        `background-image: url(https:${postData.heroImage.fields.file.url})`
      "
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
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% auto !important;
  height: 300px !important;
}
</style>
