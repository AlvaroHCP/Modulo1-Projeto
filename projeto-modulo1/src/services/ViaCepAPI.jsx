import axios from 'axios';


const FindPostalCode = async (postalCode) => {
    let data
    try {
        data = await axios.get(`viacep.com.br/ws/${postalCode}/json`)
    } catch (error) {
        alert(`${error}
        
        O CEP informado é inválido.`)
    }

    data.length > 0 ? console.log(data) : data
}

export { FindPostalCode }