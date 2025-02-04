<template>
  <div class="about">
    <!-- {{ $store.state.products }} -->
    <table>
      <tr>
        <td>Product Code</td>
        <td>Product Name</td>
        <td>Product Price</td>
        <td>Product Quantity</td>
        
      </tr>
      <tr v-for="product in $store.state.products">
        <td>{{ product.product_code }}</td>
        <td>{{ product.product_name }}</td>
        <td>{{ product.product_price }}</td>
        <td>{{ product.product_quantity }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.$store.dispatch('fetchProducts')
    }
  }
  </script>