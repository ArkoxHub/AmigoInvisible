<script setup>
import { onMounted
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
    <h1>Regalos</h1>
    <p>Estamos trabajando actualmente en ofrecerte este servicio.</p>
    <!-- TODO Look why iframes are not shown in some browsers -->
    <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
        src="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=arkox-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B09GWPYXVH&linkId=6843129613ffce21c6b3ff9a806e74cc&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>
    <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
        src="https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=arkox-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B091VTT67M&linkId=7e337d6cb2082972f7ad74418bca4b26&bc1=000000&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>
    <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
        src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09S4K14ZW&linkId=f8a2c8ddf38bf6c118598648d964dfc3"></iframe>
</template>

<style scoped>
p {
    margin-top: 2rem;
}
</style>