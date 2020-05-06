<template>
  <div>
    <HeaderComponent />
    <nuxt />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
