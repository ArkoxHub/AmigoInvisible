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