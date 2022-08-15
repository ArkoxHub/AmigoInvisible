<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    TogglePopup: {
        type: Function,
        required: true,
    },
    DeleteItem: {
        type: Function,
        required: true,
    },
    description: {
        type: String,
    }
})

onMounted(() => {
    document.addEventListener('keyup', closePopupListener)
    setTimeout(() => {
        document.addEventListener('click', closePopUpClickOutside)
    }, 100)
})

onUnmounted(() => {
    document.removeEventListener('click', closePopUpClickOutside)
    document.removeEventListener('keyup', closePopupListener)
})

function closePopupListener($event) {
    if ($event.key === 'Escape') {
        props.TogglePopup()
    }
}

function closePopUpClickOutside(event) {
        const popup = document.getElementsByClassName("popup-inner")[0];
        const popupIsClicked = popup.contains(event.target);
        if (!popupIsClicked) {
            props.TogglePopup()
        }
}

</script>

<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <p v-if="description" class="popup-description">
                {{ description }}
            </p>
            <div class="center-buttons-popup">
                <button 
                    @click="DeleteItem()"
                    class="primary-button-link delete" 
                    type="text">
                        <span>Eliminar</span>
                </button>

                <button 
                    @click="TogglePopup()"
                    class="primary-button-link" 
                    type="text">
                        <span>Cancelar</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #8b8b8b6b;
    text-align: center;
}

.popup .popup-inner {
    color: #333;
    width: 500px;
    background-color: #fff;
    padding: 1rem;
    border-radius: var(--border-radius)
}

.popup .popup-description {
    margin-top: 1rem;
}

.center-buttons-popup {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
}
</style>