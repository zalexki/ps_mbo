<template>
    <div class="module-price-wrapper">
        <div class="module-price-number">{{ price }}</div>
        <div class="module-price-currency">{{ currency }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ModulePrice',
        props: ['currency', 'price']
    }
</script>

<style scoped>
    .module-price-wrapper, .module-price-currency, .module-price-number { 
        float: right; 
        font-size: 1.1em; 
    }
</style>