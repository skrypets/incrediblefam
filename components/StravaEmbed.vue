<template>
  <div class="iframe-container">
    <iframe
      class="responsive-iframe"
      frameborder="0"
      allowtransparency="true"
      scrolling="no"
      :src="activityUrl"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['activityUrl']
}
</script>

<style lang="scss" scoped>
.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 60%; /* Strava Non-standard Aspect Ratio */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
