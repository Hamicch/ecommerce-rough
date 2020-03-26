<template>
        <VueSlickCarousel v-bind="settings" class="vcimage">
            <div v-for="item in carousel" :key="item.carouselId"><img src="@/assets/slide1.jpg" /></div>
            <div v-for="item in carousel" :key="item.carouselId"><img src="@/assets/slider2.jpg"  /></div>
            <div v-for="item in carousel" :key="item.carouselId"><img src="@/assets/slider3.jpg"  /></div>
            <div v-for="item in carousel" :key="item.carouselId"><img src="@/assets/slider4.jpg" /></div>
    </VueSlickCarousel>
</template>


<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
name: 'MyComponent',
    components: { VueSlickCarousel },

        data() {
                return {
                         settings: {
                                "dots": true,
                                "dotsClass": "slick-dots custom-dot-class",
                                "edgeFriction": 0.35,
                                "infinite": false,
                                "speed": 500,
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                        },
                        carousel: [
                                {
                                        carouselId: 1,
                                        carouselmage: require("@/assets/slide1.jpg")
                                },
                                {
                                        carouselId: 2,
                                        carouselmage: require("@/assets/slider2.jpg")
                                },
                                {
                                        carouselId: 3,
                                        carouselmage: require("@/assets/slider3.jpg")
                                },
                                {
                                        carouselId: 4,
                                        carouselmage: require("@/assets/slider4.jpg")
                                }
                        ],
                }
        }
}
</script>

<style scoped>
img {
        width: 700px;
        height: 400px;
        margin-top: 30px;
}
</style>>