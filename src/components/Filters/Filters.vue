<template>
  <v-form class="filters d-flex flex-column flex-lg-row align-center" @submit.prevent="setFilters">
    <ul class="filters__list d-flex flex-wrap ma-0 pa-0">
      <filters-item
          :filter="filter"
          v-for="filter in filters"
          :key="`filter_${filter.key}`"
          class="filters__item"
          @pick="checkFilter($event,filter.key)"
      />
    </ul>
    <div class="d-flex flex-column justify-center filters__controls">
      <v-btn  depressed width="100%" color="#70d24e" large type="submit">Применить</v-btn>
      <v-btn  small color="success" text  class="filters__reset mt-1" @click="clearFilters">Сбросить фильтр</v-btn>
    </div>
  </v-form>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {eventBus} from "@/main";
import FiltersItem from "@/components/Filters/FiltersItem";

export default {
  name: "Filters",
  components: {FiltersItem},
  data: () => ({
    checkedFilters: {
      size: {
        type: 'check',
        values: []
      },
      floor:{
        type: 'range',
        values: []
      },
      square: {
        type: 'range',
        values: []
      },
      price: {
        type: 'range',
        values: []
      }
    }
  }),
  computed: {
    ...mapGetters(["filters"])
  },
  methods: {
    ...mapMutations(['setCheckedFilters', "clearCheckedFilters"]),
    checkFilter(data, filterKey){
      this.checkedFilters[filterKey].values = data
    },
    clearFilters(){
      this.clearCheckedFilters()
      for(const filterKey in this.checkedFilters){
        this.checkedFilters[filterKey].values = []
      }
      eventBus.$emit('clearFilters')
    },
    setFilters(){
      this.setCheckedFilters(this.checkedFilters)
    }
  }
}
</script>

<style scoped>

</style>