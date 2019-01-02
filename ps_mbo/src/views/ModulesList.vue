<template>
    <div class="modules-list">
        <ModuleCard 
            v-for="(module, key) in modules"
            :key="key"
            :logo="module.attributes.img"
            :title="module.attributes.displayName"
            :version="module.attributes.version"
            :author="module.attributes.author"
            :description="module.attributes.description"
            :badge_img="badge_img(module.attributes.badges)"
            :badge_label="badge_label(module.attributes.badges)"
            :rating="module.attributes.starsRate"
            :nb_rating="module.attributes.nbRates"
            :price="module.attributes.price"
            :currency="module.attributes.currency"
        >
        </ModuleCard>
    </div>
</template>

<script>

import ModuleCard from '../components/ModuleCard.vue';
import { request } from '@/api/ajax.js'

export default {
    name: 'ModulesList',
    components: {
        ModuleCard
    },
    data() {
        return {
            modules: []
        }
    },
    methods: {
        badge_img(badges) {
             if (!badges[0]) {
                return '';
            }

            if (typeof badges[0]['img'] !== 'undefined') {
                return badges[0]['img'];
            }

            return '';
        },
        badge_label(badges) {
            if (!badges[0]) {
                return '';
            }

            if (typeof badges[0]['label'] !== 'undefined') {
                return badges[0]['label'];
            }

            return '';
        }
    },
    created: function() {
        console.log(adminAjaxController);
        console.log('coucou');

        request({
            action: 'GetModulesList'
            //data: {}
        }).then(response => {
            this.modules = response.modules;
        }).catch(error => {
            console.log('ERROR');
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .modules-list {
        max-width: 83.3%;
        margin: auto;
    }

</style>
