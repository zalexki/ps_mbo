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
            rating="35"
            nb_rating="245"
        />

        <div class="mbo-price-wrapper">
            <div class="mbo-price-currency">{{ currency }}</div>
            <div class="mbo-price-number">{{ price }}</div>
        </div>

        <div class="mbo-action-buttons">
            <button class="btn btn-default">Discover</button>
        </div>
    </div>
</template>

<script>
    import ModuleRating from './ModuleRating.vue';

    export default {
        name: 'ModuleCard',
        components: {
            ModuleRating
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

</style>