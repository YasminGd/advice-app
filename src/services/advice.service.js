import axios from "axios"

export const adviceService = {
    getAdvice
}

async function getAdvice() {
    try {
        const data = await axios.get('https://api.adviceslip.com/advice')
        const advice = data.data.slip
        return advice
    } catch (error) {
        console.error(error)
        throw error
    }
}