<template>
    <h1 class="main-title">Resultado amigo invisible</h1>
    <div class="result-container">
        <p class="text-centered">Hola <span class="span-color">{{ user.name }}</span>, debes hacer hacer un regalo a...</p>
        <div class="result">
            <button v-if="showResult == false" class="primary-button-link" @click="toggleResult">
                <span>PULSA AQUÍ PARA VER RESULTADO</span>
            </button>
            <button v-if="showResult == true" class="primary-button-link" @click="this.fireWorks()">
                <span>{{ user.result }}</span>
            </button>
        </div>
        <hr>
        <div class="wishlist-info-container">
            <div class="wishlist-header-info">
                <img src="../assets/images/amigos.png" alt="Imagen de dos amigos" />
                <h1 class="span-color">Lista de deseos</h1>
            </div>
            <p>Accede ahora a la <a @click="redirectToWishlist()" class="router-link">lista de deseos</a> grupal.</p>
            <p>Ahora que ya sabes el resultado del amigo invisible, puedes crear una lista de regalos que te gustaría recibir cuando llegue el día de entregar los regalos.</p>
            <p>Esta lista es privada, solo los participantes de vuestro sorteo pueden consultarla.</p>
            <p>También puedes acceder insertando tu identificación de participante <span class="span-color">{{ user._id }}</span> accediendo 
            <router-link class="router-link" to="/lista-de-deseos">en este enlace</router-link>.</p>
        </div>

        <!-- Logo -->
        <div class="logo-ending-container">
            <img src="../assets/images/regalos.png" alt="Logo de la aplicación" />
        </div>
    </div>
</template>

<script>
import confetti from 'canvas-confetti'
export default {
    data() {
        return {
            user: '',
            showResult: false,
            groupId: '',
        }
    },
    methods: {
        getUserData() {
            const URL = import.meta.env.VITE_API_URL + '/getUserData/' + this.$route.params.id // Get ID from URL
            // GET Fetch
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.user = data.participants[0]
                    this.groupId = data._id
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push('error')
                })
        },
        toggleResult() {
            this.showResult = !this.showResult
            this.fireWorks()
        },
        redirectToWishlist() {
            this.$router.push('/lista-de-deseos/' + this.groupId + "/" + this.user._id)
        },  
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
        this.getUserData();
        this.participantId = this.$route.params.id;
        window.scrollTo(0, 0)
    },
}
</script>

<style scoped>
p {
    margin-bottom: 2rem;
}

.result-container:first-child {
    text-align: center;
}

.result {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.primary-button-link {
    padding: 10px
}

.wishlist-info-container h2 {
    text-transform: uppercase;
}

.wishlist-header-info {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
}

.wishlist-header-info img {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
}

.logo-ending-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}

.logo-ending-container  img {
    width: 120px;
}
</style>