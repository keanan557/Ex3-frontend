<template>
    <div>
      <h1>Edit Product</h1>
      <label>Product Code: </label>
      <input type="text" v-model="product.product_code" ><br>
  
      <label>Product Name: </label>
      <input type="text" v-model="product.product_name"><br>
  
      <label>Product Price: </label>
      <input type="text" v-model="product.product_price"><br>
  
      <label>Product Quantity: </label>
      <input type="text" v-model="product.product_quantity"><br>
  
      <button @click="updateProduct">+Update Product</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          product_code: '',
          product_name: '',
          product_price: '',
          product_quantity: ''
        }
      }
    },
    mounted() {
      const productCode = this.$route.params.product_code;
      this.fetchProductDetails(productCode);
    },
    methods: {
      async fetchProductDetails(productCode) {
        try {
          const response = await fetch(`http://localhost:3000/products/${productCode}`);
          const data = await response.json();
          this.product = data.product;
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      },
  
      async updateProduct() {
        try {
            console.log(this.product)
          await this.$store.dispatch('updateProduct',this.product)
  
        //   if (true) {
        //     alert("Product updated successfully!");
        //     this.$router.push("/products"); // Redirect to products list after update
        //   } else {
        //     alert("Failed to update product.");
        //   }
        } catch (error) {
          console.error("Error updating product:", error);
        }
      }
    }
  }
  </script>
  