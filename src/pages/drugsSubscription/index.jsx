import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { InputForm } from "../../components/InputField"
import { TextField } from '@mui/material'
import { useForm } from "react-hook-form"


function DrugsSubscription() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const { watch } = useForm()
    // let watchValues = watch(['CNPJ', 'Celular', 'CEP', 'Latitude', 'Longitude'])

    const regex = /,/gi
    let drugStores = 'DrugsList'


    const onSubmit = (dataFromForm) => {
        let newStores = []
        let proceed = false

        console.log(dataFromForm)

        const invalidFields = Object.keys(dataFromForm).filter((keys) => {
            // console.log(dataFromForm[keys])

            return (dataFromForm[keys] == '' && !(keys == 'Descrição do Medicamento' || keys == 'Description'))

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
            [...JSON.parse(localStorage.getItem(drugStores)), { ...dataFromForm, 'Favourite': 'false' }] :
            [{ ...dataFromForm, 'Favourite': 'false' }]

        // console.log(loadedStores)

        proceed ?
            localStorage.setItem(drugStores, JSON.stringify(newStores)) :
            proceed
    }


    const fields =
        [

            {
                name: 'Name',
                title: 'Nome do Medicamento',
                type: 'text',
                required: true,
                error: false,
                field: 'input',
                width: '500px',
            },
            {
                name: 'Laboratory',
                title: 'Laboratório',
                type: 'text',
                required: true,
                error: false,
                field: 'input',
                width: '200px',
            },
            {
                name: 'Medicin Dose',
                title: 'Dosagem',
                type: 'text',
                required: true,
                error: false,
                field: 'input',
                width: '200px',
            },
            {
                name: 'DrugType',
                title: 'Tipo de Medicamento',
                type: 'select',
                required: true,
                error: false,
                field: 'select',
                options: [
                    { name: 'Medicamento Comum' },
                    { name: 'Medicamento Controlado' },
                ],
                width: '200px',

            },
            {
                name: 'Cost',
                title: 'Preço Unitário',
                type: 'price',
                required: true,
                error: false,
                field: 'input',
                width: '200px',
            },
            {
                name: 'Description',
                title: 'Descrição do Medicamento',
                type: 'text',
                required: false,
                error: false,
                field: 'textarea',
                width: '500px',
            }
        ]


    const style = (width, rest) => {
        if (rest) {
            return ({ width: width, marginLeft: '40px', marginRight: '40px', marginTop: '50px' })
        } else {
            return ({ width: width, marginLeft: '40px', marginRight: '40px', marginTop: '50px' })
        }
    }



    return (
        <div>
            <Header></Header>

            <main style={{ display: 'flex', direction: 'column', alignContent: 'center', justifyContent: 'center', flexWrap: 'wrap' }} >

                <form style={{ border: '2px solid lightseagreen', borderRadius: '10px', marginTop: '20px', width: '570px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <h1 style={{ marginTop: '30px', marginBottom: '0px' }}>Cadastre aqui os Medicamentos:</h1>

                    {fields.map(({ name, title, type, required, error, field, options, width }, index) => {

                        let isRed

                        let defaultValue = (
                            type == 'text' ? title :
                                (type == 'email' ? 'nome@email.com' :
                                    (type == 'number' ? '0' :
                                        (type == 'cep' ? '0' :
                                            (type == 'latlon' ? '-00.00' :
                                                (type == 'price' ? '00.00' : '--------')))))
                        )

                        // switch (title) {
                        //     case 'E-mail':
                        //         isRed = error

                        //         break

                        //     case 'CNPJ':
                        //         isRed = ((watchValues[0]?.length != 14) || error)

                        //         break

                        //     case 'Celular':
                        //         isRed = ((watchValues[1]?.length != 9) || error)

                        //         break

                        //     case 'CEP':
                        //         isRed = watchValues[2]?.length != 8 || error

                        //         break

                        //     case 'Latitude':
                        //         isRed = ((watchValues[3]?.length < 6) || error)

                        //         break

                        //     case 'Longitude':
                        //         isRed = ((watchValues[4]?.length < 6) || error)

                        //         break


                        //     default:

                        //         break
                        // }

                        let rest
                        if (index != 0 || index != 5) {
                            rest = true
                        } else {
                            rest = false
                        }

                        return (
                            field == 'input' ?
                                <InputForm
                                    key={name}
                                    error={isRed}
                                    name={name}
                                    title={title}
                                    type={type}
                                    required={required}
                                    storage={register}
                                    errorStorage={errors}
                                    style={style(width, rest)}
                                    defaultValue={defaultValue}
                                // helperText={helperText}
                                /> :
                                field == 'textarea' ?
                                    <TextField
                                        key={name}
                                        error={isRed}
                                        required={required}
                                        label={title}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        multiline
                                        maxRows={4}
                                        // variant="standard"
                                        style={style(width)}
                                        {...register(title)}
                                    /> :
                                    field == 'select' ?
                                        <TextField
                                            key={name}
                                            error={isRed}
                                            required={required}
                                            label={title}
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                            // helperText="Please select your currency"
                                            variant="standard"
                                            style={style(width)}
                                            {...register(title)}
                                        >
                                            {options.map((option) => (
                                                <option key={option.name} value={option.name}>
                                                    {option.name}
                                                </option>
                                            ))}
                                        </TextField>
                                        : <></>
                        )
                    })
                    }


                    <button
                        onClick={handleSubmit(onSubmit)}
                        style={{ marginTop: '50px', marginBottom: '20px' }}
                    >
                        Cadastrar Medicamento
                    </button>
                </form>
            </main >

            <Footer></Footer>
        </div>
    )
}

export { DrugsSubscription }