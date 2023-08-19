import { InputForm } from "../../components/inputField"
import { useForm } from "react-hook-form"


function DrugStoreSubscription() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const regex = /,/gi

    const onSubmit = (dataFromForm) => {
        let newStores = []
        let proceed = false

        // console.log(dataFromForm)

        const invalidFields = Object.keys(dataFromForm).filter((keys) => {
            // console.log(dataFromForm[keys])

            return (dataFromForm[keys] == '' && !(keys == 'Complemento' || keys == 'Telefone'))

            // if (dataFromForm[keys] == '') {
            //     let count = 0
            //     // console.log(`${keys}   ${dataFromForm[keys]}`)
            //     // console.log(fields.includes(keys))
            //     fields.map(({ title }) => {
            //         // title == keys ? error = true : error
            //         if (title == keys) {
            //             console.log(fields[count])
            //             fields[count].error = true
            //             reRender = true
            //             console.log(fields[count])
            //         }
            //         count++
            //         return
            //     })
            // }
        })

        // localStorage.setItem('DrugStores', JSON.stringify(fields))

        if (invalidFields.length == 0) {
            proceed = true
            alert(`
            Cadastro realizado com sucesso!!`)
        } else {
            alert(`
        O(s) seguinte(s) campo(s) precisa(m) de informação: 
        
                                        ${invalidFields.toString().replaceAll(regex, '\n\n                                        ')}
                                            
                                            `)


        }

        newStores = localStorage.getItem('DrugStores') ?
            [...JSON.parse(localStorage.getItem('DrugStores')), dataFromForm] :
            [dataFromForm]

        // console.log(loadedStores)

        proceed ?
            localStorage.setItem('DrugStores', JSON.stringify(newStores)) :
            proceed
    }


    // const currencies = [
    //     {
    //         value: 'USD',
    //         label: '$',
    //     },
    //     {
    //         value: 'EUR',
    //         label: '€',
    //     },
    //     {
    //         value: 'BTC',
    //         label: '฿',
    //     },
    //     {
    //         value: 'JPY',
    //         label: '¥',
    //     },
    // ];


    const fields =
        [

            {
                name: 'SocialName',
                title: 'Razão Social',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'CompanyNumber',
                title: 'CNPJ',
                type: 'number',
                required: true,
                error: false,
            },
            {
                name: 'CompanyName',
                title: 'Nome Fantasia',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'Email',
                title: 'E-mail',
                type: 'email',
                required: true,
                error: false,
            },
            {
                name: 'Phone',
                title: 'Telefone',
                type: 'number',
                required: false,
                error: false,
            },
            {
                name: 'CellPhone',
                title: 'Celular',
                type: 'number',
                required: true,
                error: false,
            },
            {
                name: 'PostalCode',
                title: 'CEP',
                type: 'number',
                required: true,
                error: false,
            },
            {
                name: 'Adress',
                title: 'Logradouro',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'Number',
                title: 'Número',
                type: 'number',
                required: true,
                error: false,
            },
            {
                name: 'Neighborhood',
                title: 'Bairro',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'City',
                title: 'Cidade',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'Estate',
                title: 'Estado',
                type: 'text',
                required: true,
                error: false,
            },
            {
                name: 'AditionalInfo',
                title: 'Complemento',
                type: 'text',
                required: false,
                error: false,
            },
            {
                name: 'Latitude',
                title: 'Latitude',
                type: 'latlon',
                required: true,
                error: false,
            },
            {
                name: 'Longitude',
                title: 'Longitude',
                type: 'latlon',
                required: true,
                error: false,
            },

        ]


    const style = { width: '200px', margin: '30px' }


    return (
        <form >

            {fields.map(({ name, title, type, required, error }) => {
                return (
                    <InputForm
                        key={name}
                        error={error}
                        name={name}
                        title={title}
                        type={type}
                        required={required}
                        storage={register}
                        errorStorage={errors}
                        style={style}
                    />
                )
            })
            }


            {/* <TextField
                id="standard-select-currency-native"
                select
                label="Native select"
                defaultValue="EUR"
                SelectProps={{
                    native: true,
                }}
                helperText="Please select your currency"
                variant="standard"
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                    ))}
                </TextField> */}


            <button
                onClick={handleSubmit(onSubmit)}
                style={{ display: 'flex', flexDirection: 'flex-end' }}
            >
                Vai
            </button>
        </form>
    )
}

export { DrugStoreSubscription }