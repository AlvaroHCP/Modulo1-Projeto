import { InputForm } from "../../components/inputField"
import { useForm } from "react-hook-form"


function DrugStoreSubscription() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (dataFromForm) => {
        console.log(dataFromForm)


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
    {
        'Data': [
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
        ],

        'CompleteAdress': [
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
        ],
    }



    const style = { width: '200px', margin: '30px' }


    return (
        <form >

            {fields['Data'].map(({ name, title, type, required, error }) => {
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
            })}

            {fields['CompleteAdress'].map(({ name, title, type, required, error }) => {
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
            })}




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