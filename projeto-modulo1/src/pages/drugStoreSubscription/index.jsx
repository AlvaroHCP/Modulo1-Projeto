import { InputForm } from "../../components/inputField"
import { useForm } from "react-hook-form"
import { FindPostalCode } from '../../services/ViaCEPAPI';
import { useEffect, useRef } from "react";
import { Header } from '../../components/header';



function DrugStoreSubscription() {
    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm();

    const regex = /,/gi
    let drugStores = 'DrugStores'

    const dataViaCEP = useRef({});


    let watchValues = watch(['CNPJ', 'Celular', 'CEP', 'Latitude', 'Longitude'])

    useEffect(() => {
        if (!localStorage.getItem('DrugStores')) {
            localStorage.setItem('DrugStores',
                [{ "Razão Social": "Legitimas Ideias Licenciadora Ltda", "CNPJ": "13545427000117", "Nome Fantasia": "Drogaria Legítima", "E-mail": "comercial@drogariaslegitima.com.br", "Telefone": "22816780", "Celular": "000000000", "CEP": "20780190", "Logradouro": "Rua Capitão Resende", "Número": "403", "Bairro": "Cachambi", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "Complemento", "Latitude": "-22.89612", "Longitude": "-43.27288" }, { "Razão Social": "Raia Drogasil SA", "CNPJ": "61585865024093", "Nome Fantasia": "Droga Raia", "E-mail": "rac@drogaraia.com.br", "Telefone": "", "Celular": "000000000", "CEP": "20775090", "Logradouro": "Rua Aristides Caire", "Número": "299", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.89533", "Longitude": "-43.27418" }, { "Razão Social": "Drogaria Nova da Piedade LTDA", "CNPJ": "30673654000147", "Nome Fantasia": "Drogarias Mais Oferta", "E-mail": "novapiedade@novapiedade.com", "Telefone": "", "Celular": "987601031", "CEP": "20775090", "Logradouro": "Rua Aristides Caire", "Número": "102", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.89855", "Longitude": "-43.27746" }, { "Razão Social": "Empreendimentos Pague Menos S/A", "CNPJ": "06626253000151", "Nome Fantasia": "Farmácia Pague Menos", "E-mail": "sac@pmenos.com.br", "Telefone": "", "Celular": "984815204", "CEP": "20720011", "Logradouro": "Rua Dias da Cruz", "Número": "491", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "de 475 ao fim - lado ímpar", "Latitude": "-22.90509", "Longitude": "-43.28926" }, { "Razão Social": "Empreendimentos Pague Menos S/A", "CNPJ": "06626253000151", "Nome Fantasia": "Farmácia Pague Menos", "E-mail": "sac@pmenos.com.br", "Telefone": "", "Celular": "000000000", "CEP": "20720010", "Logradouro": "Rua Dias da Cruz", "Número": "47", "Bairro": "Méier", "Cidade": "Rio de Janeiro", "Estado": "RJ", "Complemento": "", "Latitude": "-22.90209", "Longitude": "-43.27897" }]
            )
        }
    })

    useEffect(() => {

        const load = async () => {
            if (watchValues[2]?.length == 8) {

                const response = await FindPostalCode(watchValues[2])
                // console.log(response);
                dataViaCEP.current = response
                // console.log(dataViaCEP);

                fields.map(inputs => {
                    // console.log(inputs.title)
                    if (inputs.title != 'CEP' && dataViaCEP.current[inputs.title.toLowerCase()]) {
                        setValue(inputs.title, dataViaCEP.current[inputs.title.toLowerCase()])
                    } else {
                        setValue('Cidade', dataViaCEP.current['localidade'])
                        setValue('Estado', dataViaCEP.current['uf'])
                    }
                })
                setValue('Logradouro', dataViaCEP.current['logradouro'])
                // if (dataViaCEP.current[title.toLowerCase()]) {
                //     dataViaCEP.current[title.toLowerCase()]
                // }                
            }
        }
        load()
    }, [watchValues])

    // console.log(!!dataViaCEP)
    // console.log(dataViaCEP.current['logradouro'])
    // console.log(Object.keys(dataViaCEP.current))

    const onSubmit = (dataFromForm) => {
        let newStores = []
        let proceed = false

        // console.log(dataFromForm)

        const invalidFields = Object.keys(dataFromForm).filter((keys) => {
            // console.log(dataFromForm[keys])

            return (dataFromForm[keys] == '' && !(keys == 'Complemento' || keys == 'Telefone'))

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

        newStores = localStorage.getItem(drugStores) ?
            [...JSON.parse(localStorage.getItem(drugStores)), dataFromForm] :
            [dataFromForm]

        // console.log(loadedStores)

        proceed ?
            localStorage.setItem(drugStores, JSON.stringify(newStores)) :
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
        <>
            <Header>
            </Header>

            <form >

                {fields.map(({ name, title, type, required, error }) => {

                    let isRed

                    let defaultValue = (
                        type == 'text' ? title :
                            (type == 'email' ? 'nome@email.com' :
                                (type == 'number' ? '0' :
                                    (type == 'cep' ? '0' :
                                        (type == 'latlon' ? '-00,00' : '--------'))))
                    )

                    switch (title) {
                        case 'E-mail':
                            isRed = error

                            break

                        case 'CNPJ':
                            isRed = ((watchValues[0]?.length != 14) || error)

                            break

                        case 'Celular':
                            isRed = ((watchValues[1]?.length != 9) || error)

                            break

                        case 'CEP':
                            isRed = watchValues[2]?.length != 8 || error

                            break

                        case 'Latitude':
                            isRed = ((watchValues[3]?.length < 6) || error)

                            break

                        case 'Longitude':
                            isRed = ((watchValues[4]?.length < 6) || error)

                            break


                        default:

                            break
                    }

                    return (
                        <InputForm
                            key={name}
                            error={isRed}
                            name={name}
                            title={title}
                            type={type}
                            required={required}
                            storage={register}
                            errorStorage={errors}
                            style={style}
                            defaultValue={defaultValue}
                        // helperText={helperText}
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

            {dataViaCEP.current.length > 0 ? Object.keys(dataViaCEP.current).map((key, index) => {
                return (
                    <p key={index}>{key}: {dataViaCEP.current[key]}</p>
                )
            }) : <p>Sem dados Coletados</p>}
        </>
    )
}

export { DrugStoreSubscription }