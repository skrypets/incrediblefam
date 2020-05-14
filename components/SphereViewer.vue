<template>
  <div class="container">
    <div class="card">
      <div id="viewer" ref="sphere"></div>
      <button
        :class="[isButtonHidden ? 'is-hidden' : '']"
        class="button is-dark"
        @click.once="loadPanorama"
      >Завантажити панораму</button>
    </div>
  </div>
</template>
<script>
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

export default {
  data() {
    return {
      imgUrl: '//images.ctfassets.net/4ir8g0xtpeoo/1HRNeL9P5m5QMAJJ3oRdQZ/a97f3f54d4958b00351815aa02e62adc/PANO_20200509_104814.jpg',
      viewer: null,
      isButtonHidden: false,
    }
  },
  mounted() {
    this.viewer = new Viewer({
      // TODO: gyroscope and stereo view
      container: this.$refs.sphere,
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
      this.viewer.setPanorama(this.imgUrl).then(
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
