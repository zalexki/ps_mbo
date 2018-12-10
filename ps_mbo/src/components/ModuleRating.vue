<template>
    <div class="module-rating-wrapper">
        <div :class="ratingClass"></div>
        <div class="mbo-rating-number">({{ nb_rating }})</div>
    </div>
</template>

<script>
    export default {
        name: 'ModuleRating',
        props: ['rating', 'nb_rating'],
        computed: {
            ratingClass() {
                return 'module-rating-stars module-rating-stars-' + this.rating; 
            }
        },
    }
</script>

<style scoped>
    .module-rating-stars { position: relative; }

    .module-rating-stars::before {
        font-family: Material Icons;
        content: "\E838\E838\E838\E838\E838";
        color: #bbcdd2;
        float: left;
        font-size: 1.1em;
        margin-right: .5em;
        position: absolute;
        left: 0px;
        top: 0;
    }

    .module-rating-stars-0::after  { content: ""; }
    .module-rating-stars-05::after { content: "\E839"; }
    .module-rating-stars-1::after  { content: "\E838"; }
    .module-rating-stars-15::after { content: "\E838\E839"; }
    .module-rating-stars-2::after  { content: "\E838\E838"; }
    .module-rating-stars-25::after { content: "\E838\E838\E839"; }
    .module-rating-stars-3::after  { content: "\E838\E838\E838"; }
    .module-rating-stars-35::after { content: "\E838\E838\E838\E839"; }
    .module-rating-stars-4::after  { content: "\E838\E838\E838\E838"; }
    .module-rating-stars-45::after { content: "\E838\E838\E838\E838\E839"; }
    .module-rating-stars-5::after  { content: "\E838\E838\E838\E838\E838"; }

    .module-rating-stars::after {
        position: absolute;
        font-family: Material Icons;
        color: #ffd100;
        font-size: 1.1em;
        left: 0px;
        top: 0;
    }
</style>