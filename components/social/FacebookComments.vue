<template>
  <div
    ref="fb"
    class="fb-comments"
    :data-colorscheme="colorscheme"
    :data-numposts="numposts"
    :data-order-by="orderBy"
    :data-width="width"
    :data-href="href"
  ></div>
</template>
<script>
export default {
  name: "FacebookComments",
  computed: {
    href: function() {
      return this.$route.query.page
    }
  },
  asyncData (context) {
    console.log(context)
  },
  props: {
    colorscheme: {
      type: String,
      default: 'light' // Can be "light" or "dark".
    },
    numposts: {
      type: Number,
      default: 10
    },
    orderBy: {
      type: String,
      default: 'social' // Can be "social", "reverse_time", or "time".
    },
    width: {
      type: String,
      default: '100%' // Can be a pixel value '550'
    }
  },

}
</script>
