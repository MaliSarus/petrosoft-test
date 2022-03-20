<template>
  <v-app>
    <v-main>
      <v-container class="custom-container">
        <v-row>
          <v-col cols="12">
            <h1 class="text-center text-uppercase ">Lorem ipsum dolor sit.</h1>
            <filters/>
          </v-col>
          <v-col cols="12">
            <products/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Filters from "@/components/Filters/Filters";
import Products from "@/components/Products/Products";

export default {
  name: 'App',

  components: {
    Products,
    Filters
  },

  data: () => ({
    //
  }),
};
</script>
