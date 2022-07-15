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
            <Product :product="item"/>
        </template>
    </section>
</template>

<script>
import BaseSelect from '../components/form/BaseSelect.vue';
import Product from '../components/Product.vue';

export default {
    components: { BaseSelect, Product },
    data() {
        return {
            categories: {
                names: [],
                categorySelected: 'Electrónica'
            },
            catalog: [
                {
                    productId: 1,
                    category: 'Hogar y Cocina',
                    title: 'Ventilador Orbegozo',
                    description: 'Ventilador de 3 niveles de velocidad. Tamaño de las aspas 40cm.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01D4YVY80&linkId=5b52c7df0ef229818e9e6b1a44044d1f"></iframe>',
                    url: 'https://amzn.to/3Pq0SuK',
                },
                {
                    productId: 2,
                    category: 'Hogar y Cocina',
                    title: 'Topfinel cortinas cocina blancas.',
                    description: 'Cortinas modernas 2 piezas visillos con anillos de barra para ventanas.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07KTRW2FB&linkId=9a9234050da920d2c276d204d27ed10e"></iframe>',
                    url: 'https://amzn.to/3o3pWMs',
                },
                {
                    productId: 3,
                    category: 'Hogar y Cocina',
                    title: 'Brita Maxtra',
                    description: 'Brita MAxtra + Pack 2 cartuchos de filtro de agua, compatible con jarras filtrantes BRITA que reducen la cal, el color y otras sustancias.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XBZTYHZ&linkId=98518f3926495713c86c829b8a45e295"></iframe>',
                    url: 'https://amzn.to/3ccusWg',
                },
                {
                    productId: 4,
                    category: 'Ropa y Complementos',
                    title: 'Jack & Jones Bóxer para Hombre',
                    description: 'Forma en H anatómica correcta para mayor comodidad. Tejido mixto resistente y flexible',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09RF4PK44&linkId=1f8cc8e31c7f289fe26267659c97c082"></iframe>',
                    url: 'https://amzn.to/3IyDrxe',
                },
                {
                    productId: 5,
                    category: 'Ropa y Complementos',
                    title: 'Sandalias PUMA 20',
                    description: 'PUMA Popcat 20, Chanclas Unisex Adulto. Material exterior: Sintético. Cierre: Slip on.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07S6NTCLB&linkId=67221dde11a67a1450a52e8d888dcddc"></iframe>',
                    url: 'https://amzn.to/3c6A6cE',
                },
                {
                    productId: 6,
                    category: 'Ropa y Complementos',
                    title: 'Cross Classic',
                    description: 'Cross Classic, Zuecos unisex adulto.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07X2QFSKR&linkId=42ea6b924222a212581a9c987a8f0419"></iframe>',
                    url: 'https://amzn.to/3P1UwlR',
                },
                {
                    productId: 7,
                    category: 'Videojuegos',
                    title: 'Tarjeta prepago PlayStation',
                    description: 'Tarjeta prepago Sony PlayStation - Código - PS5/PS4/PS3',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07JH6VD7T&linkId=f168901c4c4c3f0a2020d5dffa7531ed"></iframe>',
                    url: 'https://amzn.to/3ccuIEI',
                },
                {
                    productId: 8,
                    category: 'Videojuegos',
                    title: 'Nintendo Switch Sports',
                    description: 'Videojuego Nintendo Sports para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S5S9L94&linkId=03f191d8e819242eff2835e2d45a8f48"></iframe>',
                    url: 'https://amzn.to/3bXwREf',
                },
                {
                    productId: 9,
                    category: 'Videojuegos',
                    title: 'Mario Strikers Battle League',
                    description: 'Videojuego Mario Strikers Battle League para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S4K14ZW&linkId=fbe7ab17f374b772ca73e5f550803d6e"></iframe>',
                    url: 'https://amzn.to/3bY90UW',
                },
                {
                    productId: 10,
                    category: 'Videojuegos',
                    title: 'Xenoblade Chronicles 3',
                    description: 'Videojuego Xenoblade Chronicles 3 para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S53HTQZ&linkId=51f6fdefd0134a0ffbae7b2c5845aeec"></iframe>',
                    url: 'https://amzn.to/3OZg3eK',
                },
                {
                    productId: 11,
                    category: 'Videojuegos',
                    title: 'Kirby y la Tierra Olvidada',
                    description: 'Videojuego Kirby y la Tierra Olvidada para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09GWPYXVH&linkId=20a859c9a6a98f2d823bbec028d3c6fd"></iframe>',
                    url: 'https://amzn.to/3c3WWSd',
                },
                {
                    productId: 12,
                    category: 'Bricolaje y Herramientas',
                    title: 'Puerta de malla magnética Apalus',
                    description: 'Cortina hecha de malla, cierre magnético de arriba a abajo, se cierra automáticamente.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09N355H4Z&linkId=e2d2a09bb763ddeb01cec822c901b869"></iframe>',
                    url: 'https://amzn.to/3o09UTC',
                },
                {
                    productId: 13,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mascarillas FFP2',
                    description: 'Astormedic mascarillas FFP2 Jiada - Homologada CE - para adultos. Mascarilla de protección con 5 capas.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092YJTJM4&linkId=6ce2ed4c2d261b1d2ab34db27f7b9703"></iframe>',
                    url: 'https://amzn.to/3P7gt2M',
                },
                {
                    productId: 14,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera puerta magnética',
                    description: 'Cortina mosquitera magnética para puertas cortina de salar de estar.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08LKDF7C3&linkId=cf66f90d249c0354f4835e1ee90b3d00"></iframe>',
                    url: 'https://amzn.to/3RwJSFl',
                },
                {
                    productId: 15,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera para ventanas "Magic Click"',
                    description: 'Mosquitera EASYmaxx para ventanas "Magic Click". Con protección extra contra el polen. Se puede cortar a medida para todas las ventanas. 150 x 130.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092NPXY6Y&linkId=c2c465cd20873562f22ebadc22a8ba92"></iframe>',
                    url: 'https://amzn.to/3z1uKbH',
                },
                {
                    productId: 16,
                    category: 'Bricolaje y Herramientas',
                    title: 'Maletín con juego de llaves',
                    description: 'Mannesmann M29166 - Maletín con juego de llaves de vaso y puntos de destornillador (130 piezas) & Bosch Mini Line.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07TVNCQX3&linkId=a33ec7d2487ca5b3701158d7d2566caf"></iframe>',
                    url: 'https://amzn.to/3z12rdp',
                },
                {
                    productId: 17,
                    category: 'Películas y TV',
                    title: 'Justified',
                    description: 'Serie completa - Alemania',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01HEE8P42&linkId=dbdbf640395c6957a49ee514b480a14a"></iframe>',
                    url: 'https://amzn.to/3P3Pzc6',
                },
                {
                    productId: 18,
                    category: 'Películas y TV',
                    title: 'Morbius (DVD)',
                    description: 'Peícula Morbius.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1QPP1LR&linkId=1f5336ccddae0dc55494d74177a9f24e"></iframe>',
                    url: 'https://amzn.to/3P2lM3C',
                },
                {
                    productId: 19,
                    category: 'Películas y TV',
                    title: 'Encanto (DVD)',
                    description: 'Película Disney - Encanto.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09MZZG8ND&linkId=003d10033113a7ffbd088cb7c120688e"></iframe>',
                    url: 'https://amzn.to/3c6yDmD',
                },
                {
                    productId: 20,
                    category: 'Películas y TV',
                    title: 'The Batman (Blue-ray)',
                    description: 'Película The Batman en Blue-ray.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1MXTKG9&linkId=0146dcfa100d4e83bbd41645adb228ec"></iframe>',
                    url: 'https://amzn.to/3PFikMj',
                },
                {
                    productId: 21,
                    category: 'Películas y TV',
                    title: 'Spider-Man: No way Home (4k Ultra-HD + Blu-ray)',
                    description: 'Película Disney - Spider-Man: No way Home',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09TBGHBMC&linkId=1bdda232a59d369adb43fee0c0e76985"></iframe>',
                    url: 'https://amzn.to/3IzUTBJ',
                },
                {
                    productId: 22,
                    category: 'Electrónica',	
                    title: 'Funda Samsung Galaxy A52 5G',
                    description: 'Funda para Samsung Galaxy A52 5G / A52 4G / A52s 5G con protección de  cámara, casrcasa protectora antigolpes, ultrafina y suave, TPU Silicona y materiales de alta calidad.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09CGYXVHC&linkId=25169f15f023fc7587e8cf91fd218a10"></iframe>',
                    url: 'https://amzn.to/3AMZK0a',
                    
                }
                ,
                {
                    productId: 23,
                    category: 'Electrónica',
                    title: 'Alexa 3º generación',
                    description: 'Echo Dot (3.ª generación) - Altavoz inteligente con Alexa, tela de color antracita',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07PHPXHQS&linkId=ca87b966309ea75a3dacff5f8b12bdf5"></iframe>',
                    url: 'https://amzn.to/3IwIcaC',
                },
                {
                    productId: 24,
                    category: 'Electrónica',
                    title: 'Alexa 4ª generación',
                    description: 'Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Antracita',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084DWG2VQ&linkId=bf2665bc881aeb09f4d1c5fced7e11b1"></iframe>',
                    url: 'https://amzn.to/3Iy7KUG',
                },
                {
                    productId: 25,
                    category: 'Electrónica',
                    title: 'Alexa 4ª generación',
                    description: 'Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Blanco',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084J4MZK6&linkId=8df97e2acec74abccb62db16b1ae376c"></iframe>',
                    url: 'https://amzn.to/3IwBem7',
                },                
                {
                    productId: 26,
                    category: 'Electrónica',
                    title: 'Fire TV - Incluye mando',
                    description: 'Fire TV Stick con mando por voz Alexa (incluye controles del TV), dispositivo de streaming HD',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08C1KN5J2&linkId=7d437b99955ae175fee7c29d47f70258"></iframe>',
                    url: 'https://amzn.to/3c9p9qW',
                },
                {
                    productId: 27,
                    category: 'Electrónica',
                    title: 'TP-Link TAPO C200',
                    description: 'TP-Link TAPO C200 - Cámara IP WiFi 360°, Cámara de Vigilancia FHD 1080p, Visión nocturna, Admite tarjeta SD, Audio Doble Vía, Detección de movimiento, Control Remoto, Compatible con Alexa, Multicolor',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07XLML2YS&linkId=e54455221f701fe0157a01ee9d2f3465"></iframe>',
                    url: 'https://amzn.to/3nZF0uQ',
                },
                {
                    productId: 28,
                    category: 'Electrónica',
                    title: 'Nuevo Apple AirTag',
                    description: 'Localiza tus cosas con la app Buscar, la misma que usas para encontrar a tus amigos y dispositivos',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09364K56M&linkId=ca035367affdc6ef439183659d416086"></iframe>',
                    url: 'https://amzn.to/3yBfosX',
                },
                {
                    productId: 29,
                    category: 'Electrónica',
                    title: 'Funda con llavero para AirTag',
                    description: 'Belkin - Funda con llavero para AirTag (Secure Holder, cubierta protectora, protector para Air Tag con borde elevado antiarañazos) Negro',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B093333693&linkId=fdd4d3102412171f7028dce814e1899a"></iframe>',
                    url: 'https://amzn.to/3uKOPAB',
                },
                {
                    productId: '30',
                    category: 'Bebé',
                    title: 'Dodot Toallitas Aqua Pure para Bebé, 99% Agua, 864 Toallitas, 18 Paquetes (18 x 48)',
                    description: 'Dodot Toallitas Aqua Pure para Bebé, 99% Agua, 864 Toallitas, 18 Paquetes (18 x 48)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0857VM1FS&linkId=911f434a710350a22a1e5721121e7709"></iframe>',
                    url: 'https://amzn.to/3uN0crL',
                },
                {
                    productId: '31',
                    category: 'Bebé',
                    title: 'Dodot Toallitas Sensitive',
                    description: 'Dodot Toallitas Sensitive para Bebé, 810 Toallitas, 15 Paquete (15x54), Óptima Protección para la Piel de Dodot',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B082N3CB8G&linkId=7f1e890fcb7d91161a47fe8da67e8c21"></iframe>',
                    url: 'https://amzn.to/3yFvWzY',
                },
                {
                    productId: '32',
                    category: 'Bebé',
                    title: 'Huggies Pure Toallitas',
                    description: 'Huggies Pure Toallitas para Bebé - 18 paquetes de 56 unidades (1008 Toallitas)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0111AIZ68&linkId=d56036dc74ca3030a039875ad56ce773"></iframe>',
                    url: 'https://amzn.to/3NYkm8U',
                },
                {
                    productId: '33',
                    category: 'Bebé',
                    title: 'Safeto Barrera de seguridad para bebés.',
                    description: 'Safety Close barrera de seguridad para niños con sistema de cierre automático. Aperturas de 73-80cm.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00O50YUHA&linkId=14eee1dcc25a0d99c1257244cc234397"></iframe>',
                    url: 'https://amzn.to/3O6pesH',
                },
                {
                    productId: '34',
                    category: 'Bebé',
                    title: 'Babify Shower Bañera Plegable',
                    description: 'Babify Shower Bañera Plegable de Bebe con Cojin de Baño - Plegado ultra compacto - Antideslizante - Color Menta',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08SLG18SP&linkId=978432c8a9bd0275570494459522f047"></iframe>',
                    url: 'https://amzn.to/3RrFQ0Z',
                },
                {
                    productId: '35',
                    category: 'Bebé',
                    title: 'Mesa para bebés en asiento de coche.',
                    description: 'Mesa para Niños en la Asiento de Coche lenbest, Bandeja de Viaje Snack, Tablero Impermeable del Coche 40x32 cm.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07FM6SKMG&linkId=547b387fd98182ab858ce0ee765dd5b2"></iframe>',
                    url: 'https://amzn.to/3O6pyaT',
                },
                {
                    productId: '36',
                    category: 'Bebé',
                    title: 'Ganchos Carro Bebé',
                    description: 'Ganchos Carro Bebé de Baby Uma - para Colgar Tus Bolsas de Compra, Bolso o Cambiador en el Manillar de la Sillita, Cochecito o Carrito Bebé. Pack de 2. Ajuste Universal (Negro)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01C39KST8&linkId=8a483bd971ce660b8912ef455584c846"></iframe>',
                    url: 'https://amzn.to/3oj6tb7',
                },
                {
                    productId: '37',
                    category: 'Bebé',
                    title: 'Funda antitérmica para silla de coche',
                    description: 'Jané Funda Antitérmica para Silla de Coche Infantil, Universal, para Grupos 0 1 2 3, Anti-UV, 1 Unidad (Paquete de 1).',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07D5JCPZN&linkId=afedfb18697bbce4406a7714f3ac015b"></iframe>',
                    url: 'https://amzn.to/3z3tox6',
                },
                {
                    productId: '38',
                    category: 'Cheques regalo',
                    title: 'Cheque regalo de Amazon',
                    description: '20€ | 25€ | 30€ | 40€ | 50€ | 75€',
                    iframe: '',
                    url: 'https://amzn.to/3P7LPGr',
                },
                {
                    productId: '39',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo de Amazon',
                    description: 'Tarjeta Regalo de Amazon.es en un estuche',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07CXKK75M&linkId=5f01505756fb15f4010e9da420e5bd68"></iframe>',
                    url: 'https://amzn.to/3cbDtyS',
                },
                {
                    productId: '40',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo de Amazon',
                    description: 'Tarjeta Regalo de Amazon.es - Estuche Cupcake',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07R3DBQ6Z&linkId=37093e08fae2e8326c89f9d5be2de51c"></iframe>',
                    url: 'https://amzn.to/3Pr1Res',
                },
                {
                    productId: '41',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo Amazon',
                    description: 'Tarjeta Regalo Amazon.es - Estuche Hola Múndo',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07YNZ8XZ2&linkId=7b383e41ba9dee71235d93b3f0747e08"></iframe>',
                    url: 'https://amzn.to/3PmmAQz',
                },
                {
                    productId: '42',
                    category: 'Belleza',
                    title: 'Rexona Invisible Desodorante',
                    description: 'Rexona Men desodorante antritranspirante invisible Ice 200ml. Ofrece mayor protección hasta 48h.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07QL8WW2G&linkId=358a7013c557df05a9ffac472164f7db"></iframe>',
                    url: 'https://amzn.to/3z1akPY',
                },
                {
                    productId: '43',
                    category: 'Belleza',
                    title: 'Neutrogena Hydro Boost Hidratante Facial Pack',
                    description: 'El Pack Hydro Boost de hidratación facial es perfecto para mantener la cara hidratada todo el día ya que contiene el Gel de Agua Hydro Boost de Neutrogena y la Crema Gel de Contorno de Ojos Hydro Boost',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B077S4TX92&linkId=eba6d752967375e3f4c2c5e43b9df384"></iframe>',
                    url: 'https://amzn.to/3ayyZC4',
                },
                {
                    productId: '44',
                    category: 'Belleza',
                    title: 'Olaplex Perfeccionador capilar nº 3',
                    description: 'BENEFICIOS Reparar el cabello dañado y los enlaces rotos con Olaplex.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08TWTQDCX&linkId=01b7674682d8f57461fd4709b81b8465"></iframe>',
                    url: 'https://amzn.to/3O1oiFP',
                },
                {
                    productId: '45',
                    category: 'Belleza',
                    title: 'Pantene Champú Repara & Protege',
                    description: 'PANTENE REPARA Y PROTEGE: champú para pelo seco y dañado. Previene la aparición de puntas abiertas',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08DDFQP4G&linkId=da04d639b61033ec6af1b306cdae97d3"></iframe>',
                    url: 'https://amzn.to/3ceU6Kl',
                },
                {
                    productId: '46',
                    category: 'Belleza',
                    title: 'Neutrogena Crema Hidratante Corporal',
                    description: 'La Loción Corporal Reparación Intensa de Neutrogena es una solución ideal para las pieles secas desde la primera aplicación la piel queda hidratada con una sensación de bienestar',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07ZPFLBJ2&linkId=e620c73f25fb9d1e394c6b48d82b5bc0"></iframe>',
                    url: 'https://amzn.to/3yG6UAM',
                },
                {
                    productId: '47',
                    category: 'Belleza',
                    title: 'Bio Sérum Florence con Vitaminas',
                    description: 'Su fórmula altamente hidratante enriquecida con vitamina E, aceite de jojoba y aloe vera, penetra profundamente en las capas subcutáneas de su piel, proporcionando una hidratación instantánea y mejorando la textura general de la piel y como efecto antienvejecimiento estimula la producción natural del colágeno.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B076611KCY&linkId=e9667c3e39f6b81db61a7600a4e79077"></iframe>',
                    url: 'https://amzn.to/3PlYmpu',
                },
                {
                    productId: '48',
                    category: 'Electrónica',
                    title: 'Kindle Paperwhite (8 GB)',
                    description: 'Kindle Paperwhite: ahora con una pantalla de 6,8", bordes reducidos, luz cálida ajustable, autonomía de hasta 10 semanas y pasos de página un 20 % más rápidos.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08N36XNTT&linkId=bcbee24e199e7a8fd0a5f4c18217c3f1"></iframe>',
                    url: 'https://amzn.to/3P7HpPT',
                },
                {
                    productId: '49',
                    category: 'Electrónica',
                    title: 'Kindle Oasis 8GB - Wifi',
                    description: 'Nuestra mejor pantalla Paperwhite de 7 pulgadas con resolución de 300 ppp y diseño frontal sin bordes.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07L5GDTYY&linkId=783516d5c43d85b776165d37e9f107d1"></iframe>',
                    url: 'https://amzn.to/3IBK9Tg',
                },
                {
                    productId: '50',
                    category: 'Electrónica',
                    title: 'Kindle - Luz frontal integrada',
                    description: 'La luz integrada regulable te permite leer durante horas dentro y fuera de casa, tanto de día como de noche.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07FQ4XCR1&linkId=894bc6ae6b1ed3851234e2ae8b5fa60d"></iframe>',
                    url: 'https://amzn.to/3aHuYeB',
                },
                {
                    productId: '51',
                    category: 'Electrónica',
                    title: 'Kindle Paperwhite Essentials Bundle',
                    description: 'Este lote contiene 3 artículos: uno Kindle Paperwhite (11.ª generación), una funda Amazon de tela y un Cargador Amazon (9W).',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09J63W1LT&linkId=bcb3c545ffad413f2155106c99ff1274"></iframe>',
                    url: 'https://amzn.to/3RtZY2l',
                },
                {
                    productId: '52',
                    category: 'Equipaje',
                    title: 'TLVMA-ROSE GOLD Maleta Cabina',
                    description: 'Aprobada por las aerolíneas para usar como maleta de cabina',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084WPTN1P&linkId=1f66e5e0e46700f580cd7d956a0e8631"></iframe>',
                    url: 'https://amzn.to/3o0gSIl',
                },
                {
                    productId: '53',
                    category: 'Equipaje',
                    title: 'American Tourister Soundbox',
                    description: 'Maleta Spinner Expansible. Cerradura fija TSA encastrada de 3 dígitos. 55cm 41 litros.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07P7Q6PF7&linkId=10299ff5ba8439813d11518ecf4e5dc8"></iframe>',
                    url: 'https://amzn.to/3z29LFv',
                },
                {
                    productId: '54',
                    category: 'Equipaje',
                    title: 'Mochila para viaje',
                    description: 'Esta mochila está hecha de poliéster resistente al agua, buena permeabilidad al aire y disipación del calor con dos correas acolchadas para los hombros, ofrece un transporte liviano.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B095YQWGP8&linkId=425c093446a0a2f5ff0c4b02fef63278"></iframe>',
                    url: 'https://amzn.to/3P1wIhM',
                },
                {
                    productId: '55',
                    category: 'Equipaje',
                    title: 'Loop Quiet - Tapones Oídos para dormir',
                    description: 'Reducción de ruido, Confort óptimo, multi-usos, fácil de usar, empaquetado ecológico.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08MFDT65P&linkId=c4f91f758e16cc6be0188b0c0a7a7a35"></iframe><iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08MFDT65P&linkId=c4f91f758e16cc6be0188b0c0a7a7a35"></iframe>',
                    url: 'https://amzn.to/3NYp5HG',
                },
                {
                    productId: '56',
                    category: 'Oficina y papeleria',
                    title: 'Rotuladores 36 Colores doble punta',
                    description: 'Rotuladores de doble punta, super flexibles, alta calidad y seguridad. Uso generalizado. Paquete durable.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08M3VGW6W&linkId=b4d0cce20208dc1595fbd8651a6fd4d8"></iframe>',
                    url: 'https://amzn.to/3IzM3Ui',
                },
                {
                    productId: '57',
                    category: 'Oficina y papeleria',
                    title: 'BIC Cristal Original Bolígrafos',
                    description: 'El clásico BIC Cristal Original es el bolígrafo más vendido del mundo y está disponible en azul, rojo, verde y negro en un blíster de 20',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B002WIGUGG&linkId=7528b6cbdb55200792077c5d68d40803"></iframe>',
                    url: 'https://amzn.to/3yG7uyn',
                },
                {
                    productId: '58',
                    category: 'Oficina y papeleria',
                    title: 'Agenda 2022 2023 - semana vista',
                    description: 'ACABADOS RESISTENTES: Agenda con anillas color dorado, refuerzos en las esquinas y tapa dura',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B3JTCSZW&linkId=353387982bef6f790374b4031e47af62"></iframe>',
                    url: 'https://amzn.to/3ARe3Rw',
                },
                {
                    productId: '59',
                    category: 'Oficina y papeleria',
                    title: 'BIC Intensity - Rotuladores Permanentes',
                    description: 'Caja grande de 24 marcadores permanentes BiC Marking para múltiples superficies: de cristal, metal o porosas, así como claras u oscuras',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=arkox00-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B083MN9T4F&linkId=3852322fb2d52c289a47184e27907977"></iframe>',
                    url: 'https://amzn.to/3z2OTOs',
                }
            ],
        }
    },
    mounted() {
        // Assign all category names to the categories array
        window.scrollTo(0, 0)
        this.categories.names = [... new Set(this.catalog.map(product => product.category))];
    },
    computed: {
        getProductsCategorySelected() {
            // return all products with the selected category
            return this.catalog.filter(product => product.category === this.categories.categorySelected);
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

.products {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
}

@media only screen and (max-width: 768px) {

}

@media only screen and (max-width: 450px) {

}
</style>