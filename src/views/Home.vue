<template>
        <div>
                <Header/>
                        <b-container class="bv-example-row">
                        <b-row>
                        <b-col cols="3">
                        <Categories  />
                        </b-col>
                        <b-col cols="9" float="right">
                        <Carouse  />
                        <Product />
                        </b-col>
                        </b-row>
                        </b-container>
                        <div class="category"></div>
                        <Footer/>
        </div>
</template>


<script>



import Header from '../components/layout/Header'

import Categories from '../components/Categories'

import Product from '../components/Product'

import Carouse from '../components/Carouse'

import Footer from '../components/layout/Footer'

require('typeface-roboto')

export default {
        name: 'Home',
        components: {
                Header,
                Categories,
                Product,
                Carouse,
                Footer
        },

        data() {
                return {
                         categories: [
                                 {
                                id: 1,
                                categoryName: 'Gaming'
                        },
                        {
                                id: 2,
                                categoryName: 'Electronics'
                        },
                        {
                                id: 3,
                                categoryName: 'Phones and Tablets'
                        },
                        {
                                id: 4,
                                categoryName: 'Cosmetics'
                        },
                        // {
                        //         id: 5,
                        //         categoryName: 'Grocery'
                        // }
                        // ],
                        // product: [
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/1.jpg"),
                        //                 categoryId: 2
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 20000,
                        //                 image: require("@/assets/2.jpg"),
                        //                 categoryId: 3
                        //         },
                        //                 {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/3.jpg"),
                        //                 categoryId: 1
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/4.jpg"),
                        //                 categoryId: 5
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/5.jpg"),
                        //                 categoryId: 1
                        //         },
                        //         {
                        //                 name: 'IPhone 11',
                        //                 price: 25000,
                        //                 image: require("@/assets/6.jpg"),
                        //                 categoryId: 4
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/7.jpg"),
                        //                 categoryId: 4
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/8.jpg"),
                        //                 categoryId: 3
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/9.jpg"),
                        //                 categoryId: 2
                        //         },
                        //         {
                        //                 name: 'Shoe',
                        //                 price: 25000,
                        //                 image: require("@/assets/10.jpg"),
                        //                 categoryId: 1
                        //         }
                              
                        ]
                }
        }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

</style>