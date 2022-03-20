<template>
  <li>
    <div class="filter">
      <div class="filter__title mb-3 font-weight-bold">
        {{ filter.name }}{{ filter.valueType ? ', ' : '' }}<span v-if="filter.valueType" v-html="filter.valueType"/>
      </div>
      <div class="filter__values filter-values">
        <ul v-if="filter.values" class="filter-values__list  flex-wrap d-flex ma-0 pa-0">
          <li v-for="value in filter.values" :key="`filter_${value}`" class="filter-values__item">
            <v-checkbox
                :label="value"
                :value="value"
                v-model="checkedValue"
            />
          </li>
        </ul>
        <div class="filter-values__range filter-range" v-if="filter.min">
          <div class="d-flex align-center">
            <div class="filter-range__input">
              <input type="text" class="d-block" v-model="checkedValue[0]">
            </div>
            -
            <div class="filter-range__input">
              <input type="text" class="d-block" v-model="checkedValue[1]">
            </div>
          </div>
          <v-range-slider
              thumb-color="#70d24e"
              track-fill-color="#70d24e"
              track-color="#d8d8d8"
              :min="filter.min"
              :max="filter.max"
              @change="changeRange"
              v-model="checkedValue"/>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "FiltersItem",
  props: ['filter'],
  data: () => ({
    checkedValue: []
  }),
  watch: {
    checkedValue(newVal) {
      if (this.filter.values) this.$emit('pick', newVal)
    }
  },
  methods: {
    changeRange(value) {
      this.$emit('pick', value)
    }
  },
  mounted() {
    this.checkedValue = this.filter?.min ? [this.filter.min, this.filter.max] : []
    eventBus.$on('clearFilters', () => {
      this.checkedValue = this.filter?.min ? [this.filter.min, this.filter.max] : []
    })
  },
  destroyed() {
    eventBus.$off('clearFilters')
  }
}
</script>

<style scoped>

</style>