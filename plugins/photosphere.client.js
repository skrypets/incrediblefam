import Vue from 'vue';
import { Viewer } from 'photo-sphere-viewer';

const PhotoSphere = Vue.component('photo-sphere', {
  props: {
    imgUrl: String
  },
  mounted() {
    new Viewer({
      container: this.$refs.pano,
      panorama: this.imgUrl
    });
  },
  template: '<h3>{{ imgUrl }}</h3>'

})

export default PhotoSphere
