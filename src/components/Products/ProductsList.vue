<template>
  <ul class="products__list">
    <li v-for="product in products" :key="`product_${product.id}`" class="products__item">
      <products-item :product="product"/>
    </li>
  </ul>
</template>

<script>
import ProductsItem from "@/components/Products/ProductsItem";
export default {
  name: "ProductsList",
  components: {ProductsItem},
  props: ['products']
}
</script>

<style scoped>

</style>