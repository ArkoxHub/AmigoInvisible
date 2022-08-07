import { ref } from 'vue'

// Fetch data async and return data and error ref
export const fetchData = async (url) => {
    try {
        const data = ref(null);
        const error = ref(null);

        const response = await fetch(url);
        if (response.ok) data.value = await response.json();
        else error.value = response.statusText;
        return { data, error };

    } catch (err) {
        error.value = err.message;
        return { data, error }
    }
}
