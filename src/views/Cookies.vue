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
    <h1 class="main-title">Cookies</h1>

    <p>Este portal, al igual que la mayoría de portales en Internet, usa cookies para mejorar la experiencia de
        navegación del usuario. Las cookies personalizan los servicios que ofrece el sitio web, ofreciendo a cada
        usuario información que puede ser de su interés, en atención al uso que realiza de este portal. A continuación
        encontrará información sobre qué son las cookies, qué tipo de cookies utiliza este portal.</p>

    <p>Las cookies son pequeños archivos que algunas plataformas, como las páginas web, pueden instalar en su ordenador,
        smartphone, tableta o televisión conectada, al acceder a las mismas. Sus funciones pueden ser muy variadas:
        almacenar sus preferencias de navegación, recopilar información estadística, permitir ciertas funcionalidades
        técnicas, almacenar y recuperar información sobre los hábitos de navegación o preferencias de un usuario o de su
        equipo hasta el punto, en ocasiones, dependiendo de la información que contengan y de la forma en que utilice su
        equipo, de poder reconocerlo. Una cookie se almacena en un ordenador para personalizar y facilitar al máximo la
        navegación del usuario. Las cookies se asocian únicamente a un usuario y su ordenador y no proporcionan
        referencias que permitan deducir datos personales del usuario. El usuario podrá configurar su navegador para que
        notifique o rechace la instalación de las cookies enviadas por el sitio web.</p>

    <p>Las cookies de rendimiento son útiles por varios motivos. Desde un punto de vista técnico, permiten que las
        páginas web funcionen de forma más ágil y adaptada a las preferencias del usuario como ,por ejemplo, almacenar
        su idioma o la moneda de su país. Además, ayudan a los responsables de los sitios web a mejorar los servicios
        que ofrecen, gracias a la información estadística que recogen a través de ellas. </p>

    <p>Las cookies de análisis estadístico aquellas que permiten cuantificar el número de visitantes y analizar
        estadisticamente la utilización que hacen los usuarios de nuestros servicios. Gracias a ellas podemos estudiar
        la navegación por nuestra página web y mejorar así la oferta de productos o servicios que ofrecemos. Estas
        cookies no irán asociadas a ningún dato de carácter personal que pueda identificar al usuario, dando información
        sobre el comportamiento de navegación de forma anónima.</p>
</template>

<style scoped>
p {
    margin-bottom: 2rem;
}
</style>