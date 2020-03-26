import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/1.jpg"),
        categoryId: 2,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 20000,
        image: require("@/assets/2.jpg"),
        categoryId: 3,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/3.jpg"),
        categoryId: 1,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/4.jpg"),
        categoryId: 5,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/5.jpg"),
        categoryId: 1,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'IPhone 11',
        price: 25000,
        image: require("@/assets/6.jpg"),
        categoryId: 4,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/7.jpg"),
        categoryId: 4,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/8.jpg"),
        categoryId: 3,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/9.jpg"),
        categoryId: 2,
        description: 'Light Weight Unisex Black Summer Sneakers'
      },
      {
        id: uuidv4(),
        name: 'Shoe',
        price: 25000,
        image: require("@/assets/10.jpg"),
        categoryId: 1,
        description: 'Light Weight Unisex Black Summer Sneakers'
      }
    ],

    // categories: [
    //   {
    //     id: 1,
    //     categoryName: 'Clothing'
    //   },
    //   {
    //     id: 2,
    //     categoryName: 'Shoes'
    //   },
    //   {
    //     id: 3,
    //     categoryName: 'Accessories'
    //   },
    //   {
    //     id: 4,
    //     categoryName: 'Fitness'
    //   },
    //   {
    //     id: 5,
    //     categoryName: 'Face + Body'
    //   }
    // ],

    chosenProduct: null
  },
  mutations: {
    setSelectProductValue(state, product) {
      state.chosenProduct = product;
    }
  },
  actions: {
  },
  modules: {
  }
})
