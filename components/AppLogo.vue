<template>
  <div>Posts {{posts}}</div>
</template>

<script>
export default {
 computed: {
   posts() {
     return this.$store.state.posts;
   }
 },
 head: {
   title: "Paw Waves, Latest Posts"
 }
};
</script>

<script>
export default {

}
</script>
