<template>
    <h1 class="main-title">Resultado</h1>
    <div class="result-container">
        <p>Hola <span class="span-color">{{ user.name }}</span>, debes haces hacer un regalo a...</p>
        <div class="result">
            <button v-if="showResult == false" class="primary-button-link" @click="toggleResult">
                <span>PULSA AQUÍ PARA VER RESULTADO</span>
            </button>
            <button v-if="showResult == true" class="primary-button-link">
                <span>{{ user.result }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import confetti from 'canvas-confetti'
// this.fireWorks()
export default {
    data() {
        return {
            user: '',
            showResult: false
        }
    },
    methods: {
        getUserData() {
            const local = 'http://localhost:5445/getUserData/' + this.$route.params.id
            const pro = "https://amigoinvisible-api.onrender.com/getUserData/" + this.$route.params.id
            // GET Fetch
            fetch(pro)
                .then(response => response.json())
                .then(data => {
                    this.user = data.participants[0]
                    console.log(this.user.name);
                    
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
        window.scrollTo(0, 0)
    },
}
</script>

<style scoped>
p {
    margin-top: 2rem;
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
</style>