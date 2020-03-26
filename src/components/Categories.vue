<template>
        <div class="wrap">
                <div class="list-group">
                        <a href="#!" class="list-group-item list-group-item-action active title">Categories</a>
                        <a href="#!" class="list-group-item list-group-item-action">Clothing</a>
                        <a href="#!" class="list-group-item list-group-item-action">Shoes</a>
                        <a href="#!" class="list-group-item list-group-item-action">Accessories</a>
                        <a href="#!" class="list-group-item list-group-item-action ">Fitness</a>
                        <a href="#!" class="list-group-item list-group-item-action ">Face + Body</a>
                </div>
        </div>
</template>


<script>

export default {
        name: 'Categories',
        props: ['item'],
        
}
</script>

<style scoped>

.wrap {
        margin-top: 30px;
}

.title {
        background-color: #212121;
        border: 1px solid #212121;
        font-weight: 400;
}
</style>