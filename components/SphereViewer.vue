<template>
  <div class="container">
    <div class="card">
      <div id="viewer" ref="viewer"></div>
      <button
        :class="[isButtonHidden ? 'is-hidden' : '']"
        class="button is-dark"
        @click.once="loadPanorama"
      >Завантажити панораму</button>
      {{panoramas}}
    </div>
  </div>
</template>
<script>
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

export default {
  data() {
    return {
      viewer: null,
      isButtonHidden: false,
    }
  },
  props: {
    panoramas: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    this.viewer = new Viewer({
      // TODO: create custom buttons to toggle through panoramas (pref iterator)
      // TODO: investigate gyroscope and stereo view
      container: this.$refs.viewer,
      caption: 'Заповідник «Тустань» © Mykola Skrypets' ,
      navbar: [
        'zoom',
        'caption',
        'fullscreen',
      ],
      lang: {
        zoom      : 'Зум',
        zoomOut   : 'Зум -',
        zoomIn    : 'Зум +',
        fullscreen: 'Повний екран',
        menu      : 'Меню',
        loadError : 'Панорама не завантажилась :(',
      },
      loadingTxt: 'Завантаження...',
      mousewheel: false
    });
  },
  methods: {
    loadPanorama() {
      this.viewer.setPanorama(this.panoramas[0].fields.file.url).then(
        this.isButtonHidden = !this.isButtonHidden
      );
    }
  },
}
</script>
<style lang="scss" scoped>
#viewer {
    height: 400px;
}
button {
  position: absolute ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
