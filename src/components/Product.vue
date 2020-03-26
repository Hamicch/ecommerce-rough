<template>
        <div class="wrap">

                <Categories />
                <div class="card" style="width:400px" v-for="product in allProducts" :key="product.id">
                <img class="card-img-top" :src="product.image" alt="Card image">
                <div class="card-body">
                <h4 class="card-title" @click="goToProduct(product)"><a>{{ product.name }}</a></h4>
                <p class="card-text">&#8358; {{ product.price }}</p>
                <a href="#" class="btn btn-dark" @click="goToProduct(product)">Buy Now</a>
        </div>
</div>
</div>
</template>


<script>

import Categories from './Categories'

export default {
        name: 'Products',
        components: {
                Categories
        },
        // props: ['product'],

        computed: {
            allProducts() {
                    return this.$store.state.products;
            }
    },
     methods: {
                goToProduct(product) {
                        this.$store.commit("setSelectedProductValue", product);
                        this.$router.push({ path: "/product-page" });
  }
    } 
}
</script>

<style scoped>

.wrap {
        display: inline-block;
        margin-top: 40px;
        margin-left: 0px;
}
</style>