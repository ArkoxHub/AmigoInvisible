<script setup>
import UniqueID from '../features/UniqueID'
</script>

<template>
    <section class="summary-container">
        <h1 class="main-title">Resumen del sorteo</h1>
        <p class="summary-description">Verifica la información introducida y a continuación pulsa el botón <span class="span-color">terminar</span> para recibir el resultado del sorteo en el correo de cada participante.</p>

        <!-- Card Summary -->
        <div class="card-summary">
            <div class="card-header">
                <h2 class="subTitle">Sorteo</h2>
                <p><strong class="span-text">- Título: </strong> {{ draw.name }}</p>
                <p v-if="draw.price != ''"><strong class="span-text">- Precio orientativo: </strong> {{ draw.price }}</p>
                <p v-if="draw.date != ''"><strong class="span-text">- Fecha: </strong> {{ draw.date }}</p>
            </div>

            <div class="card-body">
                <h2 class="subTitle">Participantes</h2>
                <ul class="participant-list" v-for="(participant, index) in draw.participants">
                    <li><strong class="span-text">Participante {{ index + 1 }}: </strong> {{ participant.name }}</li>
                    <li><strong class="span-text">Email: </strong>: {{ participant.email }}</li>
                    <li v-if="participant.exclude != ''"><strong class="span-text">Exclusiones: </strong>{{ participant.exclude }}</li>
                </ul>
            </div>
        </div>

        <!-- Comments -->
        <div class="comments-container">
            <h2>Añadir comentario</h2>
            <textarea placeholder="Ejemplo: La entrega de los regalos será en casa de Voldemort 🧙‍♂️" class="text-area-field" maxlength="1000" v-model="draw.comments"></textarea>
        </div>

        <!-- BUTTONS -->
        <div class="draw-actions">
            <button class="primary-button-link" @click="$emit('changeSummaryStatus')">
                <span>Editar</span>
            </button>
            <button class="primary-button-link" type="submit" @click="sendMailsRequest"><span>Terminar</span></button>
        </div>

        <!-- SPINNER -->
        <div hidden id="spinner"></div>
    </section>
</template>
<script>
export default {
    emits: ['changeSummaryStatus'],
    props: {
        draw: {
            type: Object,
            required: true
        }
    },
    methods: {
        sendMailsRequest() {
            const URL =  import.meta.env.VITE_API_URL + '/sendEmails'

            const spinner = document.getElementById('spinner');
            spinner.removeAttribute("hidden")
            document.getElementsByClassName("container")[0].classList.add("backScene")

            // POST Fetch
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.draw)
            })
            .then(response => response.json())
            .then(data => {
                spinner.setAttribute("hidden", "")
                document.getElementsByClassName("container")[0].classList.remove("backScene")

                // Redirect to success page
                this.$router.push('sorteo-finalizado')
            })
            .catch(error => { 
                this.$router.push('error')
                document.getElementsByClassName("container")[0].classList.remove("backScene")
                });
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>
<style>
.subTitle {
    margin-bottom: .3rem;
    padding: 0;
    text-transform: uppercase;
}

.card-summary {
    border: 1px solid var(--primary-color);
    padding: 2rem;
    display: flex;
    flex-flow: column wrap;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin: 1.5rem 0;
}

.card-header {
    margin-bottom: 2rem;
}

.text-area-field {
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    height: 90px;
    min-height: 50px;
    max-height: 500px;
    padding: 5px;
    border: 2px solid var(--main-bg-color);
    resize: vertical;
}

.participant-list {
    margin-bottom: 1rem;
}

.participant-list:last-child {
    margin-bottom: 0rem;
}

li {
    list-style: none;
}

.span-text {
    color: var(--primary-color);
}
</style>