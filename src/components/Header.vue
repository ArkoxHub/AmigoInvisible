<script setup>

</script>

<template>
    <nav class="main-nav">
        <ul>
            <li>Amigo invisible</li>
            <li>Comparte</li>
            <li>Recuperar sorteo</li>
            <li>Contacto</li>
        </ul>
    </nav>
</template>

<style scoped>
.main-nav {
    height: ;
    width: 100%;
    position: sticky;
    top: 20px;
    margin-bottom: 80px;
}

.main-nav ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .main-nav ul {
        flex-flow: column nowrap;
    }
}
</style>