<template>
<ins class="adsbygoogle"
     :style="style"
     :data-ad-client="adClient"
     :data-ad-slot="adSlot"
     :data-ad-format="adFormat"
     :data-ad-layout-key="adLayoutKey"></ins>
</template>
<script>
export default {
    props: {
        style: {
            type: String,
            default: 'display:block; margin-top: 1.5rem;'
        },
        adClient: {
            type: String,
            default: 'ca-pub-1463979176150407'
        },
        adSlot: {
            type: String,
            default: '6640608892'
        },
        adFormat: {
            type: String,
            default: 'fluid'
        },
        adResponsive: {
            type: String,
            default: 'true'
        },
        adLayoutKey: {
            type: String,
            default: '-fb+5w+4e-db+86'
        }
    },
    mounted() {
        if (window.adsbygoogle) {
            adsbygoogle = window.adsbygoogle || [].push({});
        }
    }
}

</script>
<style lang="">
    
</style>