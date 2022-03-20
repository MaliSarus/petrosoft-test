import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
        "building_id": 73,
        "building_name": "1 этап 1а корпуса",
        "floor": 10,
        "id": 23329,
        "is_studio": 1,
        "number": "163",
        "plan": "./assets/img/image.jpg",
        "porch": 3,
        "price": 2956317,
        "rooms": 1,
        "size": "XS",
        "square": 23.66
      },
      {
        "building_id": 74,
        "building_name": "1 этап 1а корпуса",
        "floor": 4,
        "id": 20822,
        "is_studio": 1,
        "number": "163",
        "plan": "./assets/img/image.jpg",
        "porch": 3,
        "price": 2992701,
        "rooms": 1,
        "size": "XS",
        "square": 23.87
      },
      {
        "building_id": 75,
        "building_name": "1 этап 1а корпуса",
        "floor": 4,
        "id": 20382,
        "is_studio": 1,
        "number": "163",
        "plan": "/assets/img/image.jpg",
        "porch": 3,
        "price": 4952721,
        "rooms": 2,
        "size": "2k",
        "square": 42.87
      },
      {
        "building_id": 75,
        "building_name": "1 этап 1а корпуса",
        "floor": 4,
        "id": 20332,
        "is_studio": 1,
        "number": "163",
        "plan": "/assets/img/image.jpg",
        "porch": 3,
        "price": 8862732,
        "rooms": 3,
        "size": "3k",
        "square": 42.87
      },
      {
        "building_id": 32,
        "building_name": "1 этап 1а корпуса",
        "floor": 10,
        "id": 20328,
        "is_studio": 1,
        "number": "163",
        "plan": "/assets/img/image.jpg",
        "porch": 3,
        "price": 3956317,
        "rooms": 1,
        "size": "1k",
        "square": 24.99
      },
      {
        "building_id": 37,
        "building_name": "1 этап 1а корпуса",
        "floor": 10,
        "id": 20320,
        "is_studio": 1,
        "number": "163",
        "plan": "./assets/img/image.jpg",
        "porch": 3,
        "price": 3956317,
        "rooms": 1,
        "size": "XS",
        "square": 24.99
      },
      {
        "building_id": 17,
        "building_name": "1 этап 1а корпуса",
        "floor": 10,
        "id": 33320,
        "is_studio": 1,
        "number": "163",
        "plan": "/assets/img/image.jpg",
        "porch": 3,
        "price": 5956317,
        "rooms": 1,
        "size": "2k",
        "square": 45.36
      },
      {
        "building_id": 87,
        "building_name": "1 этап 1а корпуса",
        "floor": 10,
        "id": 33321,
        "is_studio": 1,
        "number": "163",
        "plan": "/assets/img/image.jpg",
        "porch": 3,
        "price": 9956317,
        "rooms": 4,
        "size": "4",
        "square": 66.60
      }
    ],
    settedFilters:{}
  },
  mutations: {
    setCheckedFilters(state, payload){
      const payloadJson = JSON.stringify(payload)
      state.settedFilters = {...JSON.parse(payloadJson)}
    },
    clearCheckedFilters(state){
      state.settedFilters = {}
    }
  },
  actions: {},
  getters: {
    products({data, settedFilters}){
      if (!settedFilters) return data

      const filterKeys = Object.keys(settedFilters);
      return data.filter(item => {
        return filterKeys.every(key => {
          if (!settedFilters[key].values.length) return true
          if (settedFilters[key].type === 'check')
            return settedFilters[key].values.includes(item[key])
          if (settedFilters[key].type === 'range')
            if (settedFilters[key].values.length)
            return item[key] >= settedFilters[key].values[0] && item[key] <= settedFilters[key].values[1]
        })
      })
    },
    filters({data}) {
      return [
        {
          key: 'size',
          name: 'Комнаты',
          values: [...new Set(data.map(item => item.size))]
        },
        {
          key: 'floor',
          name: 'Этаж',
          min: Math.min( ...new Set(data.map(item => item.floor))),
          max: Math.max( ...new Set(data.map(item => item.floor)))
        },
        {
          key: 'square',
          name: 'Площадь',
          valueType: 'м<sup>2</sup>',
          min: Math.min( ...new Set(data.map(item => item.square))),
          max: Math.max( ...new Set(data.map(item => item.square)))
        },
        {
          key: 'price',
          name: 'Стоимость',
          valueType: 'млн. р',
          min: Math.min( ...new Set(data.map(item => item.price))),
          max: Math.max( ...new Set(data.map(item => item.price)))

        },
      ]
    },
  },
  modules: {}
})
