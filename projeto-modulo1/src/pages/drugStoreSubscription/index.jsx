import { InputForm } from "../../components/inputField"
import { TextField } from "@mui/material";
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


    const fields = [
        {
            name: 'SocialName',
            title: 'Razão Social',
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
    ]


    return (
        <form>

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


            <button onClick={handleSubmit(onSubmit)}>Vai</button>
        </form>
    )
}

export { DrugStoreSubscription }