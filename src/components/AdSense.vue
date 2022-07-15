<template>
<ins class="adsbygoogle"
     :style="style"
     :data-ad-client="adClient"
     :data-ad-slot="adSlot"
     :data-ad-format="adFormat"
     :data-full-width-responsive="adResponsive">
</ins>
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
            default: '2225887014'
        },
        adFormat: {
            type: String,
            default: 'auto'
        },
        adResponsive: {
            type: String,
            default: 'true'
        }
    },
    mounted() {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

</script>
<style lang="">
    
</style>