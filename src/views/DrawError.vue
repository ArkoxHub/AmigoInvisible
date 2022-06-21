<template>
    <section class="error-container">
        <h1 class="main-title">😿... Error al intentar generar el sorteo.</h1>
        <p>Sentimos comunicarte que hemos tenido un error al intentar establecer las bases del sorteo con nuestro servidor.</p>
        <br>
        <p>Por favor, inténtalo de nuevo más tarde y si el problema persiste contáctanos.</p>

        <!-- BUTTONS -->
        <div class="draw-actions">
            <button class="primary-button-link" @click="$router.push('/')">
                <span>Inicio</span>
            </button>
            <button class="primary-button-link" @click="$router.push('regalos-amigo-invisible')"><span>Ver
                    regalos</span></button>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>

</style>