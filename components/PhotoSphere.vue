<template>
  <div ref="pano">{{imgUrl}}</div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    // new Viewer({
    //   container: this.$refs.pano,
    //   panorama: this.imgUrl
    // });
  },
}
</script>
