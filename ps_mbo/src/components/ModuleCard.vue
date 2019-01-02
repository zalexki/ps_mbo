<template>
    <div class="mbo-card">
        
        <div class="mbo-logo">
            <img :src="logo" />
        </div>
        
        <div class="mbo-title">{{ title }}</div>
        
        <div class="mbo-info-wrapper">
            v{{ version }} - by {{ author }}
        </div>
        
        <div class="mbo-description">
            {{ description }}
        </div>
        
        <div class="mbo-read-more">
            <a href="#">Read more</a>
        </div>
        
        <div class="mbo-badge-wrapper">
            <img :src="badge_img"/> {{ badge_label }}
        </div>
        
        <hr>

        <ModuleRating 
            :rating="rating"
            :nb_rating="nb_rating"
        />

        <ModulePrice
            :price="price"
            :currency="currency"
        />

        <div class="mbo-action-buttons">
            <button class="btn btn-default">Discover</button>
        </div>
    </div>
</template>

<script>
    import ModuleRating from './ModuleRating.vue';
    import ModulePrice from './ModulePrice.vue';

    export default {
        name: 'ModuleCard',
        components: {
            ModuleRating, ModulePrice
        },
        props: ['logo', 'title', 'version', 'author', 'description', 'badge_img', 'badge_label', 'rating', 'nb_rating', 'price', 'currency']
    }
</script>

<style scoped>
    .mbo-card {
        max-width: 25%;
        border: none;
        border-radius: 0;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
        min-height: 390px;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        padding: 1.25rem;
        position: relative;
        display: block;
        margin-bottom: .75rem;
        background-color: #fff;
        text-align: center;
    }

    .mbo-title {
        font-weight: bolder;
        min-height: 24px;
        margin: 1rem 0 .5rem;
        font-size: 1rem;
        line-height: 1.2;
        color: #363a41
    }

    .mbo-info-wrapper {
        color: #6c868e;
        font-weight: lighter;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: .75rem;
        font-size: .75rem;
    }

    .mbo-description {
        min-height: 60px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #363a41;
    }

    .mbo-read-more {
        font-size: 14px;
        color: #25b9d7;
        text-decoration: none;
        font-weight: 700;
        margin: 0 0 15px 0;
    }

    .mbo-read-more:hover {
        text-decoration: underline;
    }

    .mbo-badge-wrapper {
        font-size: .9rem;
        min-height: 30px;
    }

    .mbo-action-buttons button {
        color: #19a9c6;
        background-color: transparent;
        border-color: #19a9c6;
        box-shadow: none;
        width: 100%!important;
        font-size: .625rem;
        font-weight: 600;
        border-radius: .063rem;
        line-height: 1.5;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    .mbo-action-buttons { width: 100%; margin-top: 45px; }

    .mbo-action-buttons button:hover { 
        color: #fff;
        background-color: #3ed2f0!important;
        border-color: #3ed2f0!important;
        box-shadow: none;
    }

    .mbo-logo { width: 45px; height: 45px; }

</style>