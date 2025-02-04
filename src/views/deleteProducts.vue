<template>
    <div>
      <h1>delete Product</h1>
      <label>Product Code: </label>
      <input type="text" v-model="product.product_code" ><br>

      <button @click="deleteProduct">delete Product</button>
    </div>
  </template>

  <script>
export default {
  data() {
    return {
      product: {
        product_code: '' // Product code to identify the product to delete
      }
    };
  },
  methods: {
    // Method to delete the product
    async deleteProduct() {
      try {
        const { product_code } = this.product;

        // Validate that the product_code is not empty
        if (!product_code) {
          alert('Please enter a product code.');
          return;
        }

        // Make a DELETE request to the server
        const response = await fetch(`http://localhost:3000/products/${product_code}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Product deleted successfully!');
          this.product.product_code = ''; // Clear the input field
        } else {
          alert('Failed to delete the product.');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  }
};
</script>
