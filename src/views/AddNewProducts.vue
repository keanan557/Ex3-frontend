// html
<template>
    <h1>Insert New Product</h1>

    <label>product_code: </label>
    <input type="text" v-model="product_code"><br>

    <label>product_name: </label>
    <input type="text" v-model="product_name"><br>

    <label>product_price: </label>
    <input type="text" v-model="product_price"><br>

    <label>product_quantity: </label>
    <input type="text" v-model="product_quantity"><br>

    <button @click="insertProduct">+New Employee</button>


</template>

// js
<script>
    import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    // Form data using refs
    const product_code = ref("");
    const product_name = ref("");
    const product_price = ref("");
    const product_quantity = ref("");

    const insertProduct = () => {
      store.dispatch("insertProducts", {
        product_code: product_code.value,
        product_name: product_name.value,
        product_price: product_price.value,
        product_quantity: product_quantity.value
      });

      // Clear form after submission
      product_code.value = "";
      product_name.value = "";
      product_price.value = "";
      product_quantity.value = "";
    };

    return {
      product_code,
      product_name,
      product_price,
      product_quantity,
      insertProduct
    };
  }
};


</script>

// css
<style>

</style>