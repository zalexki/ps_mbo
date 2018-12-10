<template>
    <div>
        <ModuleCard 
            logo="https://medias1.prestastore.com/img/pico/19431.jpg"
            title="Pop Promo (Popup)"
            version="1.2.8"
            author="PrestaShop"
            description="Increase the effectiveness of your promotions tenfold and sell more!  This pop-in can be configured in less than a minute, which attracts the attention of your visitors"
            badge_img="https://medias2.prestastore.com/themes/prestastore/img/front/sprites/badges/made-by-prestashop.png"
            badge_label="Made by PrestaShop"
            rating="45"
            nb_rating="259"
            price="39.99"
            currency="€"
        />
    </div>
</template>

<script>

import ModuleCard from '../components/ModuleCard.vue';

export default {
    name: 'ModulesList',
    components: {
        ModuleCard
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
