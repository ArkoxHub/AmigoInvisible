<script setup>
import {
    onMounted
} from 'vue';
const props = defineProps({
    title: String,
    required: false
})

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <h1 class="main-title">Regalos amigo invisible</h1>
    <p class="span-color">Página en desarollo</p>
    <h2>¿Necesitas ideas para el <span class="span-color">regalo del amigo invisible</span>? ¡No pierdas más el tiempo!</h2>
    <p>Aquí tienes algunos productos para que puedas comprarlos directamente en Amazon con todos sus beneficios y al
        mejor precio.</p>
    <input class="input-field" type="search" placeholder="Buscar productos, categorías..." />

    <!-- CATEGORIES ASIDE -->
    <aside class="categories">
        <CheckBox label="Todos" />
        <CheckBox label="Videojuegos" />
        <CheckBox label="Regalos" />
        <CheckBox label="Electrónica" />
        <CheckBox label="Tarjetas regalo" />
        <CheckBox label="Ropa" />
        <CheckBox label="Accesorios" />
        <CheckBox label="Otros" />
    </aside>

    <!-- CATEGORIES AND PRODUCTS CONTAINERS -->
    <!-- PRODUCTS  -->
    <section class="products">
        <!-- TODO: CREATE COMPONENT TO SHOW ALL THE COMPONETS SENDING PROPS LIKE PRICE, DESC, LINK... -->
        <!-- TODO: INFINITE SCROLL -->
        <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
            src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B098RJXBTY&linkId=3f8f303d2d195507dde6b328eff9a1df"></iframe>

        <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
            style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
            src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09GVZBYM2&linkId=16b2c31b29e28e65977563314249857b"></iframe>
    </section>
</template>

<script>
import CheckBox from '../components/form/BaseCheckBox.vue';

export default {
    components: { CheckBox },
    data() {
        return {
            categories: [
                { name: 'Videojuegos', id: 'videojuegos', products: [] },
                { name: 'Deportes', id: 'deportes', products: [] },
                { name: 'Ropa', id: 'ropa', products: [] },
                { name: 'Joyería', id: 'joyeria', products: [] },
                { name: 'Hogar y cocina', id: 'hogar-y-cocina', products: [] },
                { name: 'Bricolaje', id: 'bricolaje', products: [] },
                { name: 'Cheques regalo', id: 'cheques-regalo', products: [] }
            ]
        }
    },
}

</script>

<style scoped>

h2, p {
    margin-bottom: 2rem;
}

/* SEARCH INPUT */
input[type=search] {
    border-radius: var(--border-radius);
    width: 70%;
    margin: 0 auto;
    padding-left: .5rem;
}

input[type=search]:hover,
input[type=search]:focus {
    border: 2px solid var(--primary-color);
}

/* END SEARCH INPUT */

/* CATEGORIES ASIDE */
.categories {
    flex-basis: 28%;
    border: 1px solid yellow;
    border-radius: var(--border-radius);
    padding: 1.1rem;
    position: absolute;
    left: -30%;
    top: 32.5%;
}

/* PRODUCTS */
.products {
    flex-basis: 68%;
    border: 1px solid pink;
    height: 10rem;
    display: block;
    padding: 5px;
    margin: 2rem 0;
}
</style>