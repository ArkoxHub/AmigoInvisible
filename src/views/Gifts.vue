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
    <h2>¿Necesitas ideas para el <span class="span-color">regalo del amigo invisible</span>? ¡No pierdas más el tiempo!
    </h2>
    <p>Aquí tienes algunos productos para que puedas comprarlos directamente en Amazon con todos sus beneficios y al
        mejor precio.</p>

    <!-- SEARCH -->
    <!-- <input class="input-field" type="search" placeholder="Buscar productos, categorías..." /> -->

    <!-- CATEGORIES ASIDE -->
    <section class="categories">
        <BaseSelect 
            label="Selecciona la categoría" 
            :options="categories.names" 
            v-model="categories.categorySelected"
        />
    </section>

    <!-- PRODUCTS  -->
    <!-- TODO: CREATE COMPONENT TO SHOW ALL THE COMPONETS SENDING PROPS LIKE PRICE, DESC, LINK... -->
    <!-- TODO: INFINITE SCROLL -->
    <section class="products">
        <template v-for="(item, index) in getProductsCategorySelected" :key="index">
            <div class="product-item" :class="'product- ' + index" v-html="item"></div>
        </template>
    </section>
</template>

<script>
import BaseSelect from '../components/form/BaseSelect.vue';

export default {
    components: { BaseSelect },
    data() {
        return {
            categories: {
                names: [],
                categorySelected: 'todos'
            },
            products: [
                {
                    categoryID: 1,
                    category: 'Hogar y Cocina',
                    title: 'Ventilador Orbegozo',
                    description: 'Ventilador de 3 niveles de velocidad. Tamaño de las aspas 40cm.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01D4YVY80&linkId=5b52c7df0ef229818e9e6b1a44044d1f"></iframe>',
                },
                {
                    categoryID: 1,
                    category: 'Hogar y Cocina',
                    title: 'Topfinel cortinas cocina blancas.',
                    description: 'Cortinas modernas 2 piezas visillos con anillos de barra para ventanas.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07KTRW2FB&linkId=9a9234050da920d2c276d204d27ed10e"></iframe>',
                },
                {
                    categoryID: 1,
                    category: 'Hogar y Cocina',
                    title: 'Brita Maxtra',
                    description: 'Brita MAxtra + Pack 2 cartuchos de filtro de agua, compatible con jarras filtrantes BRITA que reducen la cal, el color y otras sustancias.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XBZTYHZ&linkId=98518f3926495713c86c829b8a45e295"></iframe>',
                },
                {
                    categoryID: 2,
                    category: 'Ropa y Complementos',
                    title: 'Havaianas Brasil',
                    description: 'Havaianas Brasil Logo, chanclas unisex adulto.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XBZTYHZ&linkId=98518f3926495713c86c829b8a45e295"></iframe>',
                },
                {
                    categoryID: 2,
                    category: 'Ropa y Complementos',
                    title: 'Sandalias PUMA 20, chanclas unisex adulto.',
                    description: '',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07S6NTCLB&linkId=67221dde11a67a1450a52e8d888dcddc"></iframe>',
                },
                {
                    categoryID: 2,
                    category: 'Ropa y Complementos',
                    title: 'Cross Classic',
                    description: 'Cross Classic, Zuecos unisex adulto.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07X2QFSKR&linkId=42ea6b924222a212581a9c987a8f0419"></iframe>',
                }
                ,
                {
                    categoryID: 3,
                    category: 'Videojuegos',
                    title: 'Tarjeta prepago PlayStation',
                    description: 'Tarjeta prepago Sony PlayStation - Código - PS5/PS4/PS3',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07JH6VD7T&linkId=f168901c4c4c3f0a2020d5dffa7531ed"></iframe>',
                }
                ,
                {
                    categoryID: 3,
                    category: 'Videojuegos',
                    title: 'Nintendo Switch Sports',
                    description: 'Videojuego Nintendo Sports para Nintendo Switch',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S5S9L94&linkId=03f191d8e819242eff2835e2d45a8f48"></iframe>',
                },
                {
                    categoryID: 3,
                    category: 'Videojuegos',
                    title: 'Mario Strikers Battle League',
                    description: 'Videojuego Mario Strikers Battle League para Nintendo Switch',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S4K14ZW&linkId=fbe7ab17f374b772ca73e5f550803d6e"></iframe>',
                },
                {
                    categoryID: 3,
                    category: 'Videojuegos',
                    title: 'Xenoblade Chronicles 3',
                    description: 'Videojuego Xenoblade Chronicles 3 para Nintendo Switch',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S53HTQZ&linkId=51f6fdefd0134a0ffbae7b2c5845aeec"></iframe>',
                },
                {
                    categoryID: 3,
                    category: 'Videojuegos',
                    title: 'Kirby y la Tierra Olvidada',
                    description: 'Videojuego Kirby y la Tierra Olvidada para Nintendo Switch',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09GWPYXVH&linkId=20a859c9a6a98f2d823bbec028d3c6fd"></iframe>',
                },
                {
                    categoryID: 4,
                    category: 'Bricolaje y Herramientas',
                    title: 'Puerta de malla magnética Apalus',
                    description: 'Cortina hecha de malla, cierre magnético de arriba a abajo, se cierra automáticamente.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09N355H4Z&linkId=e2d2a09bb763ddeb01cec822c901b869"></iframe>',
                },
                {
                    categoryID: 4,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mascarillas FFP2',
                    description: 'Astormedic mascarillas FFP2 Jiada - Homologada CE - para adultos. Mascarilla de protección con 5 capas.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092YJTJM4&linkId=6ce2ed4c2d261b1d2ab34db27f7b9703"></iframe>',
                },
                {
                    categoryID: 4,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera puerta magnética',
                    description: 'Cortina mosquitera magnética para puertas cortina de salar de estar.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08LKDF7C3&linkId=cf66f90d249c0354f4835e1ee90b3d00"></iframe>',
                },
                {
                    categoryID: 4,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera para ventanas "Magic Click"',
                    description: 'Mosquitera EASYmaxx para ventanas "Magic Click". Con protección extra contra el polen. Se puede cortar a medida para todas las ventanas. 150 x 130.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092NPXY6Y&linkId=c2c465cd20873562f22ebadc22a8ba92"></iframe>',
                },
                {
                    categoryID: 4,
                    category: 'Bricolaje y Herramientas',
                    title: 'Maletín con juego de llaves',
                    description: 'Mannesmann M29166 - Maletín con juego de llaves de vaso y puntos de destornillador (130 piezas) & Bosch Mini Line.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07TVNCQX3&linkId=a33ec7d2487ca5b3701158d7d2566caf"></iframe>',
                },
                {
                    categoryID: 5,
                    category: 'Películas y TV',
                    title: 'Justified',
                    description: 'Serie completa - Alemania',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01HEE8P42&linkId=dbdbf640395c6957a49ee514b480a14a"></iframe>',
                },
                {
                    categoryID: 5,
                    category: 'Películas y TV',
                    title: 'Morbius (DVD)',
                    description: 'Peícula Morbius.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1QPP1LR&linkId=1f5336ccddae0dc55494d74177a9f24e"></iframe>',
                },
                {
                    categoryID: 5,
                    category: 'Películas y TV',
                    title: 'Encanto (DVD)',
                    description: 'Película Disney - Encanto.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09MZZG8ND&linkId=003d10033113a7ffbd088cb7c120688e"></iframe>',
                },
                {
                    categoryID: 5,
                    category: 'Películas y TV',
                    title: 'The Batman (Blue-ray)',
                    description: 'Película The Batman en Blue-ray.',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1MXTKG9&linkId=0146dcfa100d4e83bbd41645adb228ec"></iframe>',
                },
                {
                    categoryID: 5,
                    category: 'Películas y TV',
                    title: 'Spider-Man: No way Home (4k Ultra-HD + Blu-ray)',
                    description: 'Película Disney - Spider-Man: No way Home',
                    url: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09TBGHBMC&linkId=1bdda232a59d369adb43fee0c0e76985"></iframe>',
                },
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
                ,
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
                ,
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
                ,
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
                ,
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
                ,
                {
                    categoryID: 6,
                    category: '',
                    title: '',
                    description: '',
                    url: '',
                }
            ],
            catalog: [
                {
                    category: 'todos',
                    products: [
                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01MZ94DLA&linkId=471980c5996468433b17ea631beda34f"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09V35NLJG&linkId=2624ffa81a05eb6be95f08fadda2a807"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"style="width:120px;height:240px;"marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B098RJXBTY&linkId=3f8f303d2d195507dde6b328eff9a1df"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09GVZBYM2&linkId=16b2c31b29e28e65977563314249857b"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08ZL43KS4&linkId=d69ad083475475e888c6f4bcca95e795"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0832WLDLC&linkId=a9553e9beaa902c5beba54d1b3597240"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B007WPOA3Y&linkId=5da0fb137071a7424a3bf604e708d47b"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07X2QFSKR&linkId=22ba2c88123d6c79ba88cda258ae2265"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07S6NTCLB&linkId=e2444d8ffb00df7d0994865e23d939ef"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09N355H4Z&linkId=0869f981bed76fc055191e18e432a8fd"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B3XMH5SB&linkId=af948426043eec4bcff738ab16df982e"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08HP4513K&linkId=ca2855f5b4af9043471d2a96e4b6924c"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07JH6VD7T&linkId=2da5844dd0686d50a77e76df10bbaf58"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S5S9L94&linkId=1f7ce916b2a0fb7360d97fe65c8ad09e"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08881PMQB&linkId=1cb1a0bc37c4fabbf32fce16e9f6fa43"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0041R9NMO&linkId=97b2f764d5c616d73a6f28dec5241f5e"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06Y49XN6Q&linkId=6037fb94fa78e506ff8722e5ef0a12e1"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09LCVHCVX&linkId=aa7065c7efa3a376b77d8d8e433fcc4b"></iframe>',


                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B073V1SPHP&linkId=d550f574d3c7d548412bfac9ea994c5d"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08Q7D492K&linkId=f0a69847369715214ed015e04d6d7a5a"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B077GL32M6&linkId=8d0d0881feb28c9ff582c25641f078dc"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09DSNXV9K&linkId=dd3aef591a88521c833134221b89cc0b"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07PZ6B5YP&linkId=eae0233b4e6dca0db89c9aa43f3734b4"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07CXKK75M&linkId=51aa9997a8e9f6e68821b29c97c2c635"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07R3DBQ6Z&linkId=69f4361e0037d2230b735347d25d250d"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07YNZ8XZ2&linkId=8b64c49ea9e851dfec644b90ae703fe4"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07DXXS2ZJ&linkId=201f79a2cc8a95c5fa94b2e2509444f5"></iframe>',
                    ]
                },
                { category: 'videojuegos', products: [] },
                { category: 'deportes', products: [] },
                { category: 'ropa', products: [] },
                { category: 'joyería', products: [] },
                { category: 'hogar y cocina', products: [] },
                { category: 'bricolaje', products: [] },
                {
                    category: 'cheques regalo', id: 'cheques-regalo', products: [
                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07CXKK75M&linkId=51aa9997a8e9f6e68821b29c97c2c635"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07R3DBQ6Z&linkId=69f4361e0037d2230b735347d25d250d"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07YNZ8XZ2&linkId=8b64c49ea9e851dfec644b90ae703fe4"></iframe>',

                        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07DXXS2ZJ&linkId=201f79a2cc8a95c5fa94b2e2509444f5"></iframe>',
                    ]
                }
            ]
        }
    },
    mounted() {
        // Assign all category names to the categories array
        window.scrollTo(0, 0)
        this.categories.names = this.catalog.map(category => category.category);
    },
    computed: {
        getProductsCategorySelected() {
            return this.catalog.find(catalog => catalog.category == this.categories.categorySelected).products;
        },
    }
}

</script>

<style scoped>
h2,
p {
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

.categories > div {
    padding: 10px;
}

/* PRODUCTS */
.products {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 2rem 0;
}

.product-item {
    padding: 1rem;
}

/* AMAZON */

@media only screen and (max-width: 768px) {

}

@media only screen and (max-width: 450px) {
    .products {
        justify-content: space-evenly;
    }
}
</style>