import { defineStore } from 'pinia'
import UniqueID from '../features/UniqueID'

export const useDrawStore = defineStore('draw', {
    state: () => ({
        draw: {
            title: '',
            price: '',
            date: '',
            comments: '',
            host: '',
            participants: [
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] },
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] },
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] }
            ],
        },
    }),
    getters: {
        getDrawStored(state) {
            return state.draw
        }
    },
    actions: {
        setDraw(newDraw) {
            this.draw = newDraw
        },
        setParticipants(participants) {
            this.draw.participants = participants
        }
    }
})