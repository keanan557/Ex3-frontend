import DeleteProducts from '@/views/deleteProducts.vue';
import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    // store data
    products: []
  },
  mutations: {
    // change state
    setProducts(state,payload){
      state.products = payload
    },

    // add
    addProduct(state, product){
      state.products.push(product)
    },

    // update product in the state
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.product_code === updatedProduct.product_code);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },

    // delete product from the state
    deleteProduct(state, productCode) {
      state.products = state.products.filter(product => product.product_code !== productCode);
    }


  },
  actions: {
    // fetch data or run asynchronous code
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        commit('setProducts', data.products);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    // insert data
    async insertProducts({commit},product){
      const response = await fetch('http://localhost:3000/products',{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })

      if (response.ok) {
        commit("addProduct", product); // Update local state
      }
    },

      // update product in the API and update the store
      async updateProduct({commit}, prod) {
        console.log( prod); // Check the updated data
        // console.log();
        
        const a = axios.patch(`http://localhost:3000/products/${prod.product_code}`,{
              product_code: prod.product_code,
              product_name: prod.product_name,
              product_price: prod.product_price,
              product_quantity: prod.product_quantity
            }) // Send the updated product data
          
        // const response = await fetch(`http://localhost:3000/products/${prod.product_code}`, {
        //   method: 'PATCH',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     product_code: prod.product_code,
        //     product_name: prod.product_name,
        //     product_price: prod.product_price,
        //     product_quantity: prod.product_quantity
        //   }) // Send the updated product data
        // });
      
        // if (response.ok) {
        //   alert("Product updated successfully!");
        //   this.$router.push('/products');
        // } else {
        //   alert("Failed to update product.");
        // }
      },
      

    
  // delete product in the API and update the store
  async deleteProducts({ commit }, productCode) {
    try {
      const response = await fetch(`http://localhost:3000/products/${productCode}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        commit("deleteProduct", productCode); // Update local state
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  },
  modules: {

  }
})
