<template>
    <!-- Print product with title, description, and URL -->
    <div class="product">
        <h2>{{ product.title }}</h2>
        <div class="amazon-container" v-html="product.iframe"></div>
        <p class="product-description">
            <span class="span-color">Descripción: </span>
            {{ product.description }}
        </p>
        <a type="text" class="primary-button-link" :href="product.url" target="_blank">
            <span>Comprar</span>
        </a>
    </div>

</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.product {
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    flex-basis: 48%;
    margin-top: 2rem;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
}

p, a{
    padding: 0 20px;
}

h2,
.product-description,
p,
a {
    margin-bottom: 1.8rem;
}

.amazon-container {
    display: block;
    padding: 0 20px;
    margin-bottom: 1.8rem;
}

a {
    text-decoration: none;
}

h2 {
    width: 100%;
    text-align: center;
    color: var(--font-text-secondary);
    background-color: var(--primary-color);
    line-height: 2.2rem;
    padding: .3rem;
}

.product-info-image {
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
}

@media only screen and (max-width: 850px) {
    .product {
        flex-basis: 100%;
    }
}

@media only screen and (max-width: 450px) {}
</style>