<template>
<div class="products">
  <products-list :products="products"/>
</div>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList";
import {mapGetters} from "vuex";
export default {
  name: "Products",
  components: {ProductsList},
  computed:{
    ...mapGetters(['products'])
  },
}
</script>

<style scoped>

</style>