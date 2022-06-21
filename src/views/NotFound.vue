<template>
    <h1 class="main-title">😢Oops!</h1>
    <h3>La {{ resource }} página a la que intentas acceder no existe.</h3>
    <router-link class="span-color" to="/">Volver</router-link>
</template>
<script>
export default {
    props: {
        resource: {
            type: String,
            required: true,
            default: 'page'
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>
<style scoped>
a {
    margin-top: 20px;
}
</style>