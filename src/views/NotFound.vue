<template>
    <h1 class="main-title">Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link to="/">Back</router-link>
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
</style>