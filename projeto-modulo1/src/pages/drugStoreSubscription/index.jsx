import { InputForm } from "../../components/inputField"
import { useForm } from "react-hook-form"
import { FindPostalCode } from '../../services/ViaCepAPI'
import { useEffect } from "react";


function DrugStoreSubscription() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const regex = /,/gi



    let watchValues = watch(['CNPJ', 'Celular', 'CEP', 'Latitude', 'Longitude'])

    useEffect(() => {
        // console.log(watchValues, watchValues[0]?.length, watchValues[1]?.length, watchValues[2]?.length, watchValues[3]?.length, watchValues[4]?.length)

        if (watchValues[2].length == 8) {
            const response = FindPostalCode(watchValues[2])

            console.log(response)
        }

    }, [watchValues])



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

                const defaultValue = (
                    type == 'text' ? title :
                        (type == 'email' ? 'nome@email.com' :
                            (type == 'number' ? '0' :
                                (type == 'latlon' ? '-00,00' : '--------')))
                )

                let isRed

                switch (title) {
                    case 'email':
                        isRed = error

                        break

                    case 'CNPJ':
                        isRed = ((watchValues[0]?.length != 8) || error)

                        break

                    case 'Celular':
                        isRed = ((watchValues[1]?.length != 8) || error)

                        break

                    case 'CEP':
                        isRed = watchValues[2]?.length != 8 || error

                        break

                    case 'Latitude':
                        isRed = ((watchValues[3]?.length != 8) || error)

                        break

                    case 'Longitude':
                        isRed = ((watchValues[4]?.length != 8) || error)

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
                    />


                    // <TextField
                    //     key={name}
                    //     style={style}
                    //     // error={error}
                    //     error={watchValues.length == 8 && (error[title] == undefined || error[title].type != 'pattern') ? false : true}
                    //     id={name}
                    //     variant="standard"
                    //     required={required}
                    //     value={validText}
                    //     label={title}
                    //     type={type}
                    //     helperText={message}
                    //     defaultValue={defaultField}
                    //     // onChange={event(title)}
                    //     InputLabelProps={{
                    //         shrink: true,
                    //     }}
                    //     // InputProps={{
                    //     //     readOnly: false,
                    //     // }}
                    //     {...register(title, {
                    //         pattern: type === 'email' ? /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{1,}$/ :
                    //             (type === 'password' ? /^[A-Za-z\d@$!%*#?&]{8,}$/ :
                    //                 (type === 'number' ? /[0-9]/ :
                    //                     (type === 'text' ? /^(?!\s*$)[a-z ,.'-~ãõç]+$/i :
                    //                         (type === 'latlon' ? /^(-+)[*0-9]{2},[*0-9]{1,8}$/ :
                    //                             /[a-zA-Z0-9]/)))),
                    //         // validate:
                    //     })}
                    // />
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