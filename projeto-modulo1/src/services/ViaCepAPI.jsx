import axios from 'axios';


// const FindPostalCode = async (postalCode, storageData) => {
const FindPostalCode = async (postalCode) => {

    try {
        if (postalCode) {
            // console.log(postalCode)
            const data = await axios.get(`https://viacep.com.br/ws/${postalCode}/json/`)

            if (data.data) {
                console.log(data.data)


                // storageData(data.data)
            }
        }

    } catch (error) {
        alert(`${error}
        
        O CEP informado é inválido.`)
    }

    // data.length > 0 ? console.log(data) : data
}

export { FindPostalCode }