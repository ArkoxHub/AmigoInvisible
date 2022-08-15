<script setup>
import { onMounted, ref, reactive } from 'vue';
import Popup from '../components/Popup.vue';
import BaseInput from '../components/form/BaseInput.vue';

const emit = defineEmits(['update-wishlist'])
const state = reactive({ validationErrorMessage: ""})
const props = defineProps({
    draw: {
        type: Object,
        required: true,
    },
    participantLogged: {
        type: String,
        required: true,
    },
})

const participant = ref('')
const wishlisSelectedItem = ref('')
const wishlistInput = ref('')

onMounted(() => {
    window.scrollTo(0, 0);

    // Current participant
    participant.value = props.draw.participants.find(participant => participant._id === props.participantLogged)

    // Order draw by wishlist length
    props.draw.participants.sort((a, b) => b.wishlist.length - a.wishlist.length)

    // Put current participant at the top of the list and remove it from the list
    const currentParticipant = props.draw.participants.splice(props.draw.participants.indexOf(participant.value), 1)
    props.draw.participants.unshift(currentParticipant[0])
})

function setWishListItemSelectedAndTogglePopUp(trigger, item) {
    wishlisSelectedItem.value = item
    togglePopup(trigger)
}

// Add item to participant's wishlist array and update API
function addItemWishList() {
    // Validation
    if (wishlistInput.value.trim() === '') {
        state.validationErrorMessage = "Introduce un regalo"
        document.getElementsByClassName("full-width")[0].focus()
        return false;
    } else {
        if (participant.value.wishlist.length >= 10) {
            state.validationErrorMessage = "Has introducido el máximo de regalos"
            return false;
        } else {
            participant.value.wishlist.push(wishlistInput.value)
            state.validationErrorMessage = ""
            emit('update-wishlist', props.draw)
            wishlistInput.value = ""
            document.getElementsByClassName("full-width")[0].focus()
        }
    }
}

function deleteWishlistItem(participant, item) {
    participant.wishlist.splice(participant.wishlist.indexOf(item), 1)
    togglePopup('buttonTrigger')
    
    emit('update-wishlist', props.draw)
}

// POPUP
const popupTriggers = ref({
    buttonTrigger: false,
    timedtrigger: false
})

// Toggle popup
function togglePopup(trigger) {
    popupTriggers.value[trigger] = !popupTriggers.value[trigger]
}
</script>

<template>
    <h2>Hola, {{ participant.name }}.</h2>
    <!-- Draw Card -->
    <div class="wrap-container">
        <h2 class="span-color">Información del sorteo:</h2>
        <p class="span-color">Título: <span class="white-font"> {{ draw.title }}</span></p>
        <p class="span-color" v-if="draw.price">Precio: <span class="white-font"> {{ draw.price }}</span></p>
        <p class="span-color" v-if="draw.date">Fecha: <span class="white-font"> {{ draw.date }}</span></p>
        <p class="span-color" v-if="draw.comments">Comentarios: <span class="white-font"> {{ draw.comments }}</span></p>
    </div>

    <!-- Participant Card -->
    <template v-for="(participant, index) in draw.participants" :key="index">
        <div class="wrap-container">
            <h2 class="wishlist-participant-name">Lista de deseos de <span class="span-color">{{ participant.name.toUpperCase() }}</span></h2>
            <ul v-if="participant.wishlist.length == 0">
                <li class="wishlist-no-item">{{ participant.name }} no tiene regalos añadidos todavía. </li>
            </ul>
            <ul>
                <li v-for="(item, index) in participant.wishlist" :key="index" class="wishlist-item">
                    {{ item }}
                    <span 
                        v-if="participant._id == participantLogged" 
                        class="delete-wishlist-item"
                        @click="setWishListItemSelectedAndTogglePopUp('buttonTrigger', item)">
                        <img src="../assets/images/borrar.png" alt="Papelera"/>
                    </span>
                </li>
            </ul>
            <template v-if="participant._id == participantLogged">
                <div class="add-gifts-container">
                    <BaseInput 
                        label="Añade regalos a tu lista"
                        placeholder="Por ejemplo: 'Libro un mundo nuevo ahora'"
                        classLabel="span-color" 
                        className="full-width" 
                        v-model="wishlistInput"
                        :errorLabel="state.validationErrorMessage"
                        minLenght="3"
                        maxLength="40"
                        @keydown.enter="addItemWishList()"
                    />
                    <button 
                        @click="addItemWishList()"
                        class="primary-button-link full-width" 
                        type="text"
                    >
                        <span>Añadir</span>
                    </button>
                    <small>*Puedes agregar hasta un máximo de 10 entradas.</small>
                </div>
            </template>
        </div>
    </template>

    <Popup 
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup= "() => togglePopup('buttonTrigger')"
        :DeleteItem= "() => deleteWishlistItem(participant, wishlisSelectedItem)"
        :description="wishlisSelectedItem"
    >
        <h3>¿Seguro que quieres eliminar este regalo?</h3>
    </Popup>
    
</template>

<style scoped>
.wishlist-participant-name {
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 15px;
    text-align: center;
}

.wrap-container > ul {
    padding-top: 15px;
}

.wrap-container > ul li {
    line-height: 2rem;
    position: relative;
}

.wishlist-item::before {
    content: '';
    height: 12px;
    width: 12px;
    background-color: var(--primary-color);
    border-radius: 5%;
    display: inline-block;
    margin: 0 10px;
}

.wishlist-no-item::before {
    content: '😿';
    display: inline-block;
    margin: 0 10px;
}

.delete-wishlist-item {
    cursor: pointer;
    position: absolute;
    right: 0;
}

.delete-wishlist-item img {
    width: 16px;
    height: 16px;
}

.delete-wishlist-item:hover > .wrap-container > ul li {
    background-color: red;
}

.add-gifts-container {
    margin-top: 20px;
}

.add-gifts-container small {
    margin: 10px 0;
}

.add-gifts-container button {
    margin-top: 10px;
}

/* mobile */
@media (max-width: 768px) {
    .add-gifts-container small {
        margin-bottom: 10px;
    }

    .add-gifts-container button {
        margin-top: auto;
    }
    
}
</style>