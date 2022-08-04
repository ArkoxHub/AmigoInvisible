import { ref } from 'vue'

export function getData(url) {
    const data = ref(null)
    const error = ref(null)

    fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
    console.log(data)
    return { data, error }
}