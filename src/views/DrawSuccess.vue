<template>
    <section class="success-container">
        <h1 class="main-title span-color">¡Sorteo realizado con éxito!</h1>
        <p>Todos los participantes del sorteo han recibido un correo electrónico con el resultado.</p>
        <br>
        <p>Visita la sección <router-link class="span-color" to="lista-de-deseos">lista de deseos</router-link> para
            configurar una lista de los regalos que te gustaría recibir. <br>Sólo los participantes de vuestro sorteo
            podrán ver.</p>
        <br>
        <p>Muchas gracias por participar en amigoinvisible.net 😀</p>
        <!--    TODO: WhatsApp share -->

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
import confetti from 'canvas-confetti'

export default {
    methods: {
        fireWorks() {
            var count = 200;
            var defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        this.fireWorks()
    },
}

</script>

<style scoped>
.draw-actions {
    margin-top: 50px;
}

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 1.4rem;
    }
}
</style>