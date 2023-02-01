<script setup>
import { onMounted } from 'vue';
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
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01D4YVY80&linkId=9af41917bc120f7b91efe20836e97b4e"></iframe>',
                    url: 'https://amzn.to/3aVExH6',
                },
                {
                    productId: 2,
                    category: 'Hogar y Cocina',
                    title: 'Topfinel cortinas cocina blancas.',
                    description: 'Cortinas modernas 2 piezas visillos con anillos de barra para ventanas.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07XB6PTZN&linkId=c268b106a1eaf4b2833c8eebdea9e828"></iframe>',
                    url: 'https://amzn.to/3zn7l4s',
                },
                {
                    productId: 3,
                    category: 'Hogar y Cocina',
                    title: 'Brita Maxtra',
                    description: 'Brita MAxtra + Pack 2 cartuchos de filtro de agua, compatible con jarras filtrantes BRITA que reducen la cal, el color y otras sustancias.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XBZTYHZ&linkId=30406aaf825e2b70ed22ed041b327ddc"></iframe>',
                    url: 'https://amzn.to/3ojaqMI',
                },
                {
                    productId: 4,
                    category: 'Ropa y Complementos',
                    title: 'Jack & Jones Bóxer para Hombre',
                    description: 'Forma en H anatómica correcta para mayor comodidad. Tejido mixto resistente y flexible',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09RF4PK44&linkId=f3dae337130e3872a126231dd70e3c22"></iframe>',
                    url: 'https://amzn.to/3PmTyRl',
                },
                {
                    productId: 5,
                    category: 'Ropa y Complementos',
                    title: 'Sandalias PUMA 20',
                    description: 'PUMA Popcat 20, Chanclas Unisex Adulto. Material exterior: Sintético. Cierre: Slip on.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07S6NTCLB&linkId=c76dc489a2a78b403b2b8e1538367283"></iframe>',
                    url: 'https://amzn.to/3RMGYMF',
                },
                {
                    productId: 6,
                    category: 'Ropa y Complementos',
                    title: 'Cross Classic',
                    description: 'Cross Classic, Zuecos unisex adulto.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07X2QFSKR&linkId=762175789e228d8481c1ab95ad53b0a5"></iframe>',
                    url: 'https://amzn.to/3RSY6jN',
                },
                {
                    productId: 7,
                    category: 'Videojuegos',
                    title: 'Tarjeta prepago PlayStation',
                    description: 'Tarjeta prepago Sony PlayStation - Código - PS5/PS4/PS3',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07JH6VD7T&linkId=3b2409908bbdb132efb059cc7b86f3b0"></iframe>',
                    url: 'https://amzn.to/3B3J4BS',
                },
                {
                    productId: 8,
                    category: 'Videojuegos',
                    title: 'Nintendo Switch Sports',
                    description: 'Videojuego Nintendo Sports para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S5S9L94&linkId=c194638bffd19cfd13bf4a7d79afa2aa"></iframe>',
                    url: 'https://amzn.to/3PFOIOH',
                },
                {
                    productId: 9,
                    category: 'Videojuegos',
                    title: 'Mario Strikers Battle League',
                    description: 'Videojuego Mario Strikers Battle League para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S4K14ZW&linkId=32a73aa9d0542e07336e015c285980b2"></iframe>',
                    url: 'https://amzn.to/3B7HxLi',
                },
                {
                    productId: 10,
                    category: 'Videojuegos',
                    title: 'Xenoblade Chronicles 3',
                    description: 'Videojuego Xenoblade Chronicles 3 para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S53HTQZ&linkId=dc64a3af02dab4ea03741afcb28fba38"></iframe>',
                    url: 'https://amzn.to/3PmqUPX',
                },
                {
                    productId: 11,
                    category: 'Videojuegos',
                    title: 'Kirby y la Tierra Olvidada',
                    description: 'Videojuego Kirby y la Tierra Olvidada para Nintendo Switch',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09GWPYXVH&linkId=f9ba257b89d1743ba0023839d6c90f84"></iframe>',
                    url: 'https://amzn.to/3Pn2Ble',
                },
                {
                    productId: 12,
                    category: 'Bricolaje y Herramientas',
                    title: 'Puerta de malla magnética Apalus',
                    description: 'Cortina hecha de malla, cierre magnético de arriba a abajo, se cierra automáticamente.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09N355H4Z&linkId=a3751aa526d3765b592bebdd2e05b197"></iframe>',
                    url: 'https://amzn.to/3aXn155',
                },
                {
                    productId: 13,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mascarillas FFP2',
                    description: 'Astormedic mascarillas FFP2 Jiada - Homologada CE - para adultos. Mascarilla de protección con 5 capas.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092YJTJM4&linkId=feca50bc4b01a52c99c091a9327d21a7"></iframe>',
                    url: 'https://amzn.to/3z2bw4G',
                },
                {
                    productId: 14,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera puerta magnética',
                    description: 'Cortina mosquitera magnética para puertas cortina de salar de estar.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08LKDF7C3&linkId=c29fef6911af8b4d904b578beaa6f0b4"></iframe>',
                    url: 'https://amzn.to/3crqsl1',
                },
                {
                    productId: 15,
                    category: 'Bricolaje y Herramientas',
                    title: 'Mosquitera para ventanas "Magic Click"',
                    description: 'Mosquitera EASYmaxx para ventanas "Magic Click". Con protección extra contra el polen. Se puede cortar a medida para todas las ventanas. 150 x 130.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B092NPXY6Y&linkId=635d04231de30d6b17b53c457c57b902"></iframe>',
                    url: 'https://amzn.to/3IRdMQE',
                },
                {
                    productId: 16,
                    category: 'Bricolaje y Herramientas',
                    title: 'Maletín con juego de llaves',
                    description: 'Mannesmann M29166 - Maletín con juego de llaves de vaso y puntos de destornillador (130 piezas) & Bosch Mini Line.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07TVNCQX3&linkId=c4c2b24be3fbc3997aeb9ad24f3f0c99"></iframe>',
                    url: 'https://amzn.to/3olf790',
                },
                {
                    productId: 17,
                    category: 'Películas y TV',
                    title: 'Justified',
                    description: 'Serie completa - Alemania',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01HEE8P42&linkId=947fa102e4036c9098ee16156ddf5577"></iframe>',
                    url: 'https://amzn.to/3IX0Gl0',
                },
                {
                    productId: 18,
                    category: 'Películas y TV',
                    title: 'Morbius (DVD)',
                    description: 'Peícula Morbius.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1QPP1LR&linkId=99d63be082efe3ac7b78b9217077b0ed"></iframe>',
                    url: 'https://amzn.to/3cxqV5n',
                },
                {
                    productId: 19,
                    category: 'Películas y TV',
                    title: 'Encanto (DVD)',
                    description: 'Película Disney - Encanto.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09MZZG8ND&linkId=5b130893ab05a3f2215f84460feda178"></iframe>',
                    url: 'https://amzn.to/3okWAJG',
                },
                {
                    productId: 20,
                    category: 'Películas y TV',
                    title: 'The Batman (Blue-ray)',
                    description: 'Película The Batman en Blue-ray.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B1MXTKG9&linkId=b75af987c5a5e703af8db68d68d17f8b"></iframe>',
                    url: 'https://amzn.to/3cvhlQr',
                },
                {
                    productId: 21,
                    category: 'Películas y TV',
                    title: 'Spider-Man: No way Home (4k Ultra-HD + Blu-ray)',
                    description: 'Película Disney - Spider-Man: No way Home',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09TBGHBMC&linkId=1cd0f04dcdfab2b8475f668cf97100dc"></iframe>',
                    url: 'https://amzn.to/3aXIdYY',
                },
                {
                    productId: 22,
                    category: 'Electrónica',	
                    title: 'Funda Samsung Galaxy A52 5G',
                    description: 'Funda para Samsung Galaxy A52 5G / A52 4G / A52s 5G con protección de  cámara, casrcasa protectora antigolpes, ultrafina y suave, TPU Silicona y materiales de alta calidad.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09CGYXVHC&linkId=c054fba9343f2ef866de4a6256d274c9"></iframe>',
                    url: 'https://amzn.to/3OoUIKK',
                    
                }
                ,
                {
                    productId: 23,
                    category: 'Electrónica',
                    title: 'Alexa 3º generación',
                    description: 'Echo Dot (3.ª generación) - Altavoz inteligente con Alexa, tela de color antracita',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07PHPXHQS&linkId=ec9eb8e71cf5c9dbea38909c0c26b9d4"></iframe>',
                    url: 'https://amzn.to/3zirtF5',
                },
                {
                    productId: 24,
                    category: 'Electrónica',
                    title: 'Alexa 4ª generación',
                    description: 'Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Antracita',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084DWG2VQ&linkId=1c3a0353cb26f808e40f8dcb6c54605f"></iframe>',
                    url: 'https://amzn.to/3v4Y26K',
                },
                {
                    productId: 25,
                    category: 'Electrónica',
                    title: 'Alexa 4ª generación',
                    description: 'Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Blanco',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084J4MZK6&linkId=136bdd056bc1dad049bc6c9db9bd5382"></iframe>',
                    url: 'https://amzn.to/3PLIUU2',
                },                
                {
                    productId: 26,
                    category: 'Electrónica',
                    title: 'Fire TV - Incluye mando',
                    description: 'Fire TV Stick con mando por voz Alexa (incluye controles del TV), dispositivo de streaming HD',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08C1KN5J2&linkId=63516c52d5d2854a5640098eb1ba045d"></iframe>',
                    url: 'https://amzn.to/3znwpsq',
                },
                {
                    productId: 27,
                    category: 'Electrónica',
                    title: 'TP-Link TAPO C200',
                    description: 'TP-Link TAPO C200 - Cámara IP WiFi 360°, Cámara de Vigilancia FHD 1080p, Visión nocturna, Admite tarjeta SD, Audio Doble Vía, Detección de movimiento, Control Remoto, Compatible con Alexa, Multicolor',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07XLML2YS&linkId=46b1a0185972090f37d0fd06d8e00de6"></iframe>',
                    url: 'https://amzn.to/3zlzf0T',
                },
                {
                    productId: 28,
                    category: 'Electrónica',
                    title: 'Nuevo Apple AirTag',
                    description: 'Localiza tus cosas con la app Buscar, la misma que usas para encontrar a tus amigos y dispositivos',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09364K56M&linkId=1d3d2afcdf8c2ebd74448f4ea73486bc"></iframe>',
                    url: 'https://amzn.to/3S0bnay',
                },
                {
                    productId: 29,
                    category: 'Electrónica',
                    title: 'Funda con llavero para AirTag',
                    description: 'Belkin - Funda con llavero para AirTag (Secure Holder, cubierta protectora, protector para Air Tag con borde elevado antiarañazos) Negro',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B093333693&linkId=cda6d8868c119b148b5761972215fa1e"></iframe>',
                    url: 'https://amzn.to/3ITu63e',
                },
                {
                    productId: '30',
                    category: 'Bebé',
                    title: 'Dodot Toallitas Aqua Pure para Bebé, 99% Agua, 864 Toallitas, 18 Paquetes (18 x 48)',
                    description: 'Dodot Toallitas Aqua Pure para Bebé, 99% Agua, 864 Toallitas, 18 Paquetes (18 x 48)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0857VM1FS&linkId=2bc7b3a7beb57a4b712692b4288e88cb"></iframe>',
                    url: 'https://amzn.to/3IRvbIV',
                },
                {
                    productId: '31',
                    category: 'Bebé',
                    title: 'Dodot Toallitas Sensitive',
                    description: 'Dodot Toallitas Sensitive para Bebé, 810 Toallitas, 15 Paquete (15x54), Óptima Protección para la Piel de Dodot',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B082N3CB8G&linkId=bb186d975d732a7bec12247bdbba358f"></iframe>',
                    url: 'https://amzn.to/3B5zqhZ',
                },
                {
                    productId: '32',
                    category: 'Bebé',
                    title: 'Huggies Pure Toallitas',
                    description: 'Huggies Pure Toallitas para Bebé - 18 paquetes de 56 unidades (1008 Toallitas)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0111AIZ68&linkId=48a12f9803581fcfd7395cbda3831d83"></iframe>',
                    url: 'https://amzn.to/3cj8EII',
                },
                {
                    productId: '33',
                    category: 'Bebé',
                    title: 'Safeto Barrera de seguridad para bebés.',
                    description: 'Safety Close barrera de seguridad para niños con sistema de cierre automático. Aperturas de 73-80cm.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00O50YUHA&linkId=e6085f4a11ea9b48c2b8a11448861d05"></iframe>',
                    url: 'https://amzn.to/3cj1YdA',
                },
                {
                    productId: '34',
                    category: 'Bebé',
                    title: 'Babify Shower Bañera Plegable',
                    description: 'Babify Shower Bañera Plegable de Bebe con Cojin de Baño - Plegado ultra compacto - Antideslizante - Color Menta',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08SLG18SP&linkId=db5c1c5b580fcd046ec8b43ce61c3c73"></iframe>',
                    url: 'https://amzn.to/3PpoeBm',
                },
                {
                    productId: '35',
                    category: 'Bebé',
                    title: 'Mesa para bebés en asiento de coche.',
                    description: 'Mesa para Niños en la Asiento de Coche lenbest, Bandeja de Viaje Snack, Tablero Impermeable del Coche 40x32 cm.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07FM6SKMG&linkId=013ceacffe8cacaf6c52c8990b6a82e5"></iframe>',
                    url: 'https://amzn.to/3OhYW6V',
                },
                {
                    productId: '36',
                    category: 'Bebé',
                    title: 'Ganchos Carro Bebé',
                    description: 'Ganchos Carro Bebé de Baby Uma - para Colgar Tus Bolsas de Compra, Bolso o Cambiador en el Manillar de la Sillita, Cochecito o Carrito Bebé. Pack de 2. Ajuste Universal (Negro)',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01C39KST8&linkId=fd741eef84df1f8f938298734a2ebace"></iframe>',
                    url: 'https://amzn.to/3Omde6y',
                },
                {
                    productId: '37',
                    category: 'Bebé',
                    title: 'Funda antitérmica para silla de coche',
                    description: 'Jané Funda Antitérmica para Silla de Coche Infantil, Universal, para Grupos 0 1 2 3, Anti-UV, 1 Unidad (Paquete de 1).',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07D5JCPZN&linkId=0b6ee61c7420c8a0d74b6e718a0364f6"></iframe>',
                    url: 'https://amzn.to/3Oo6GEf',
                },
                {
                    productId: '38',
                    category: 'Cheques regalo',
                    title: 'Cheque regalo de Amazon',
                    description: '20€ | 25€ | 30€ | 40€ | 50€ | 75€',
                    iframe: '',
                    url: 'https://amzn.to/3ySjKw5',
                },
                {
                    productId: '39',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo de Amazon',
                    description: 'Tarjeta Regalo de Amazon.es en un estuche',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07CXKK75M&linkId=cb548538a7db418df892157f555b5377"></iframe>',
                    url: 'https://amzn.to/3Om0OLN',
                },
                {
                    productId: '40',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo de Amazon',
                    description: 'Tarjeta Regalo de Amazon.es - Estuche Cupcake',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07R3DBQ6Z&linkId=51bb800b30168ad480da1d4a33af9ec6"></iframe>',
                    url: 'https://amzn.to/3aPFxN2',
                },
                {
                    productId: '41',
                    category: 'Cheques regalo',
                    title: 'Tarjeta Regalo Amazon',
                    description: 'Tarjeta Regalo Amazon.es - Estuche Hola Múndo',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07YNZ8XZ2&linkId=f73e7569c0846ae49a24c6e61442be57"></iframe>',
                    url: 'https://amzn.to/3oguqzJ',
                },
                {
                    productId: '42',
                    category: 'Belleza',
                    title: 'Rexona Invisible Desodorante',
                    description: 'Rexona Men desodorante antritranspirante invisible Ice 200ml. Ofrece mayor protección hasta 48h.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07QL8WW2G&linkId=df58ce3e901c0a893970cecda848a90f"></iframe>',
                    url: 'https://amzn.to/3B66C9b',
                },
                {
                    productId: '43',
                    category: 'Belleza',
                    title: 'Neutrogena Hydro Boost Hidratante Facial Pack',
                    description: 'El Pack Hydro Boost de hidratación facial es perfecto para mantener la cara hidratada todo el día ya que contiene el Gel de Agua Hydro Boost de Neutrogena y la Crema Gel de Contorno de Ojos Hydro Boost',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B077S4TX92&linkId=7dafd92d5f4c6ca4b0d1da53847e8225"></iframe>',
                    url: 'https://amzn.to/3yXy5al',
                },
                {
                    productId: '44',
                    category: 'Belleza',
                    title: 'Olaplex Perfeccionador capilar nº 3',
                    description: 'BENEFICIOS Reparar el cabello dañado y los enlaces rotos con Olaplex.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08TWTQDCX&linkId=4d75ac98bc2db16af03dd7f0a980e3fa"></iframe>',
                    url: 'https://amzn.to/3yUVc5E',
                },
                {
                    productId: '45',
                    category: 'Belleza',
                    title: 'Pantene Champú Repara & Protege',
                    description: 'PANTENE REPARA Y PROTEGE: champú para pelo seco y dañado. Previene la aparición de puntas abiertas',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08DDFQP4G&linkId=eabc4e2f677b9936d381217e3f44d4c3"></iframe>',
                    url: 'https://amzn.to/3zlVFz1',
                },
                {
                    productId: '46',
                    category: 'Belleza',
                    title: 'Neutrogena Crema Hidratante Corporal',
                    description: 'La Loción Corporal Reparación Intensa de Neutrogena es una solución ideal para las pieles secas desde la primera aplicación la piel queda hidratada con una sensación de bienestar',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07ZPFLBJ2&linkId=0f414739b5e83107e413ee93431950f8"></iframe>',
                    url: 'https://amzn.to/3b0X2tS',
                },
                {
                    productId: '47',
                    category: 'Belleza',
                    title: 'Bio Sérum Florence con Vitaminas',
                    description: 'Su fórmula altamente hidratante enriquecida con vitamina E, aceite de jojoba y aloe vera, penetra profundamente en las capas subcutáneas de su piel, proporcionando una hidratación instantánea y mejorando la textura general de la piel y como efecto antienvejecimiento estimula la producción natural del colágeno.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B076611KCY&linkId=24abe1ab908f008dda0914aa2e891f81"></iframe>',
                    url: 'https://amzn.to/3ov8PUe',
                },
                {
                    productId: '48',
                    category: 'Electrónica',
                    title: 'Kindle Paperwhite (8 GB)',
                    description: 'Kindle Paperwhite: ahora con una pantalla de 6,8", bordes reducidos, luz cálida ajustable, autonomía de hasta 10 semanas y pasos de página un 20 % más rápidos.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08N36XNTT&linkId=8cbe76deac04da8dbc8725d9d16df929"></iframe>',
                    url: 'https://amzn.to/3cIWTLK',
                },
                {
                    productId: '49',
                    category: 'Electrónica',
                    title: 'Kindle Oasis 8GB - Wifi',
                    description: 'Nuestra mejor pantalla Paperwhite de 7 pulgadas con resolución de 300 ppp y diseño frontal sin bordes.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07L5GDTYY&linkId=4a86f4cd0c7490edbee3bac11a99e9aa"></iframe>',
                    url: 'https://amzn.to/3PYPGG5',
                },
                {
                    productId: '50',
                    category: 'Electrónica',
                    title: 'Kindle - Luz frontal integrada',
                    description: 'La luz integrada regulable te permite leer durante horas dentro y fuera de casa, tanto de día como de noche.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07FQ4XCR1&linkId=c1eddadfff004c04e3f8e2eb7533b92d"></iframe>',
                    url: 'https://amzn.to/3z6IiS6',
                },
                {
                    productId: '51',
                    category: 'Electrónica',
                    title: 'Kindle Paperwhite Essentials Bundle',
                    description: 'Este lote contiene 3 artículos: uno Kindle Paperwhite (11.ª generación), una funda Amazon de tela y un Cargador Amazon (9W).',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09J63W1LT&linkId=89b217a2f2cbaf95da303510355c48f8"></iframe>',
                    url: 'https://amzn.to/3S0i4JC',
                },
                {
                    productId: '52',
                    category: 'Equipaje',
                    title: 'TLVMA-ROSE GOLD Maleta Cabina',
                    description: 'Aprobada por las aerolíneas para usar como maleta de cabina',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084WPTN1P&linkId=995371790ccf19c87ca942101c1c07b0"></iframe>',
                    url: 'https://amzn.to/3OxBjXZ',
                },
                {
                    productId: '53',
                    category: 'Equipaje',
                    title: 'American Tourister Soundbox',
                    description: 'Maleta Spinner Expansible. Cerradura fija TSA encastrada de 3 dígitos. 55cm 41 litros.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07P7Q6PF7&linkId=c8470f8f55cbc7adc016de5ec75706b1"></iframe>',
                    url: 'https://amzn.to/3J5Pdj0',
                },
                {
                    productId: '54',
                    category: 'Equipaje',
                    title: 'Mochila para viaje',
                    description: 'Esta mochila está hecha de poliéster resistente al agua, buena permeabilidad al aire y disipación del calor con dos correas acolchadas para los hombros, ofrece un transporte liviano.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B095YQWGP8&linkId=dfdcd3ff71e2f7e04c519fb244ca54fd"></iframe>',
                    url: 'https://amzn.to/3RZJBuy',
                },
                {
                    productId: '55',
                    category: 'Equipaje',
                    title: 'Loop Quiet - Tapones Oídos para dormir',
                    description: 'Reducción de ruido, Confort óptimo, multi-usos, fácil de usar, empaquetado ecológico.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08MFDT65P&linkId=b6871c1d1e80a4e3aa2a2900c9261836"></iframe>',
                    url: 'https://amzn.to/3J6afhB',
                },
                {
                    productId: '56',
                    category: 'Oficina y papeleria',
                    title: 'Rotuladores 36 Colores doble punta',
                    description: 'Rotuladores de doble punta, super flexibles, alta calidad y seguridad. Uso generalizado. Paquete durable.',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08M3VGW6W&linkId=d7724705884ac4d535dea534972611f9"></iframe>',
                    url: 'https://amzn.to/3J5WYVZ',
                },
                {
                    productId: '57',
                    category: 'Oficina y papeleria',
                    title: 'BIC Cristal Original Bolígrafos',
                    description: 'El clásico BIC Cristal Original es el bolígrafo más vendido del mundo y está disponible en azul, rojo, verde y negro en un blíster de 20',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B002WIGUGG&linkId=ece9cebacebc58a7287a11543fccc36f"></iframe>',
                    url: 'https://amzn.to/3ouc0vp',
                },
                {
                    productId: '58',
                    category: 'Oficina y papeleria',
                    title: 'Agenda 2022 2023 - semana vista',
                    description: 'ACABADOS RESISTENTES: Agenda con anillas color dorado, refuerzos en las esquinas y tapa dura',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0B3JTCSZW&linkId=fa42acc5d7d521a3d25d5633625282f0"></iframe>',
                    url: 'https://amzn.to/3vhsKK5',
                },
                {
                    productId: '59',
                    category: 'Oficina y papeleria',
                    title: 'BIC Intensity - Rotuladores Permanentes',
                    description: 'Caja grande de 24 marcadores permanentes BiC Marking para múltiples superficies: de cristal, metal o porosas, así como claras u oscuras',
                    iframe: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=adria083b-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B083MN9T4F&linkId=8c7ef4092d54fe5fc34c3bb8d0aa0397"></iframe>',
                    url: 'https://amzn.to/3cuPMXi',
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