<template>
  <v-card class="product">
    <div class="product__content d-flex flex-column">
      <div class="product__top product-top-info d-flex justify-space-between">
        <div class="product-top-info__left">
          {{product.floor}} этаж
        </div>
        <div class="product-top-info__right">
          {{ productSizeType }} - {{ product.square.toFixed(0) }}м<sup>2</sup>
        </div>
      </div>
      <div class="product__middle">
        <div class="product__num">№{{product.building_id}}</div>
        <div class="product__middle-wrapper">
          <div class="product__image">
            <img :src="product.plan" alt="">
          </div>
        </div>
      </div>
      <div class="product__bottom product-bottom-info text-right">
        <p class="product-bottom-info__top ma-1 font-weight-bold">{{product.price | formatNumber}}р.</p>
        <p class="product-bottom-info__bottom ma-1 font-weight-bold">{{Math.round(product.price / product.square) | formatNumber}} р за м<sup>2</sup></p>
      </div>
      <v-btn :href="product.plan" color="#70d24e" class="product__link">Подробнее</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProductsItem",
  props: ['product'],
  filters: {
    formatNumber(val) {
      return new Intl.NumberFormat('ru-RU').format(val)
    }
  },
  computed: {
    productSizeType(){
      switch (this.product.size){
        case 'XS':
            return 'Студия'
        case 'S':
          return 'Студия'
        case '1k':
          return '1 комната'
        case '2k':
          return '2 комнаты'
        case '3k':
          return '3 комнаты'
        case '4':
          return '4 комнаты'
        default:
          return 'Студия'
      }
    }
  }
}
</script>

<style scoped>

</style>