import { InputForm } from "../../components/InputField"
import { useForm } from "react-hook-form"
import { FindPostalCode } from '../../services/viaCepAPI.jsx';
import { useEffect, useRef } from "react";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'
// import { StoredDrugStores } from "../../Scripts/StoredDrogStores";
import { DivStyled } from './styled'
import { ButtonArea } from './styled'
import Button from '@mui/material/Button';



function DrugStoreSubscription() {
    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm();

    const regex = /,/gi
    let drugStores = 'DrugStores'

    const dataViaCEP = useRef({});


    let watchValues = watch(['CNPJ', 'Celular', 'CEP', 'Latitude', 'Longitude'])

    // StoredDrugStores()

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


    const fields =
        [

            {
                name: 'CompanyName',
                title: 'Nome Fantasia',
                type: 'text',
                required: true,
                error: false,
                width: '300px',
            },
            {
                name: 'Email',
                title: 'E-mail',
                type: 'email',
                required: true,
                error: false,
                width: '300px',
            },
            {
                name: 'SocialName',
                title: 'Razão Social',
                type: 'text',
                required: true,
                error: false,
                width: '400px',
            },
            {
                name: 'CompanyNumber',
                title: 'CNPJ',
                type: 'number',
                required: true,
                error: false,
                width: '150px',
            },
            {
                name: 'Phone',
                title: 'Telefone',
                type: 'number',
                required: false,
                error: false,
                width: '120px',
            },
            {
                name: 'CellPhone',
                title: 'Celular',
                type: 'number',
                required: true,
                error: false,
                width: '120px',
            },
            {
                name: 'PostalCode',
                title: 'CEP',
                type: 'number',
                required: true,
                error: false,
                width: '100px',
            },
            {
                name: 'Adress',
                title: 'Logradouro',
                type: 'text',
                required: true,
                error: false,
                width: '300px',
            },
            {
                name: 'Number',
                title: 'Número',
                type: 'number',
                required: true,
                error: false,
                width: '100px',
            },
            {
                name: 'AditionalInfo',
                title: 'Complemento',
                type: 'text',
                required: false,
                error: false,
                width: '200px',
            },
            {
                name: 'Neighborhood',
                title: 'Bairro',
                type: 'text',
                required: true,
                error: false,
                width: '200px',
            },
            {
                name: 'City',
                title: 'Cidade',
                type: 'text',
                required: true,
                error: false,
                width: '200px',
            },
            {
                name: 'Estate',
                title: 'Estado',
                type: 'text',
                required: true,
                error: false,
                width: '100px',
            },
            {
                name: 'Latitude',
                title: 'Latitude',
                type: 'latlon',
                required: true,
                error: false,
                width: '100px',
            },
            {
                name: 'Longitude',
                title: 'Longitude',
                type: 'latlon',
                required: true,
                error: false,
                width: '100px',
            },

        ]


    const style = (width, index) => {
        const marginAddress = '120px'
        const marginGeoLocation = '200px'
        if (index < 7) {
            return ({ width: width, margin: '30px' })
        } else if (index == 7 || index == 9 || index == 11) {
            return ({ width: width, margin: '30px', marginLeft: marginAddress })
        } else if (index == 8 || index == 10 || index == 12) {
            return ({ width: width, margin: '30px', marginRight: marginAddress })
        } else if (index == 13) {
            return ({ width: width, margin: '30px', marginLeft: marginGeoLocation })
        } else {
            return ({ width: width, margin: '30px', marginRight: marginGeoLocation })
        }
    }


    return (
        <>
            <Header>
            </Header>

            <DivStyled>
                <form
                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    <h3
                        style={{ width: '100%', textAlign: 'start' }}
                    >Dados da Empresa:</h3>
                    {fields.map(({ name, title, type, required, error, width }, index) => {

                        let isRed

                        let defaultValue = (
                            type == 'text' ? title :
                                (type == 'email' ? 'nome@email.com' :
                                    (type == 'number' ? '0' :
                                        (type == 'cep' ? '0' :
                                            (type == 'latlon' ? '-00.00' : '--------'))))
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

                        let printH3
                        if (index == 7) {
                            printH3 = 'Endereço:'
                        } else if (index == 13) {
                            printH3 = 'Geo-localização:'
                        }

                        const divisors = (printH3) => {
                            return (
                                <h3
                                    style={{ width: '100%', textAlign: 'start' }}
                                >
                                    {printH3}
                                </h3>
                            )
                        }

                        return (
                            <>
                                {!!printH3 ? divisors(printH3) : <></>}
                                <InputForm
                                    key={index}
                                    error={isRed}
                                    name={name}
                                    title={title}
                                    type={type}
                                    required={required}
                                    storage={register}
                                    errorStorage={errors}
                                    style={style(width, index)}
                                    defaultValue={defaultValue}
                                // helperText={helperText}
                                />
                            </>

                        )
                    })
                    }


                    {/* <button
                        onClick={handleSubmit(onSubmit)}
                        style={{ display: 'flex', flexDirection: 'flex-end' }}
                    >
                        Vai
                    </button> */}

                    <ButtonArea>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            autoFocus
                        >
                            Cadastrar Farmácia
                        </Button>
                    </ButtonArea>
                </form>
            </DivStyled >
            <Footer>
            </Footer>
        </>
    )
}

export { DrugStoreSubscription }