import './styled.js'
import { TextField } from "@mui/material";


function InputForm({ error, name, title, type, required, readOnly, storage, errorStorage, style, defaultValue }) {

    console.log(error, name, title, type, required, readOnly, storage, errorStorage, style, defaultValue);
    required != true ? required = false : required = true
    readOnly != true ? readOnly = false : readOnly = true
    defaultValue == undefined ? defaultValue = '' : defaultValue

    // console.log(title, error)

    // const { watch } = useForm()


    // let erMessage = 'Error'
    let erTitle = title
    let message
    let erMessage
    let defaultField
    let validText

    const defaultText = (text) => {
        defaultValue == '' ? defaultField = text : defaultField = defaultValue
    }

    switch (type) {
        case 'email':
            message = 'seunome@dominio.algo'
            erMessage = 'seunome@dominio.algo'
            defaultText('nome@email.com')

            break

        case 'password':
            message = ''
            erMessage = ''
            defaultText('12345678')

            break

        case 'number':
            message = 'Digite apenas números.'
            erMessage = 'Digite apenas números.'
            defaultText('1234567890')

            break

        case 'text':
            message = ''
            erMessage = ''
            defaultText(title)

            break

        case 'latlon':
            message = ''
            erMessage = ''
            defaultText('-22,876')

            break

        default:
            message = ''
            erMessage = 'Mensagem fora das regras deste campo.'


            break
    }

    if (error == true) {
        title = erTitle
    } else { error = false }

    const errorInput = (errorStorage) => {

        if (errorStorage[title]?.type) {
            console.log(errorStorage[title].type)

            return
        }
        // else {
        //     console.log(errorStorage[title] == undefined)
        // }
    }

    return (
        <>

            {
                <TextField
                    style={style}
                    // error={error}
                    error={(!error) && (errorStorage[title] == undefined || errorStorage[title].type != 'pattern') ? false : true}
                    id={name}
                    variant="standard"
                    required={required}
                    value={validText}
                    label={title}
                    type={type}
                    helperText={message}
                    defaultValue={defaultField}
                    // onChange={errorInput(errorStorage)}
                    // onChange={(e) => errorInput(e)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: readOnly,
                    }}
                    {...storage(title, {
                        pattern: type === 'email' ? /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]{1,}$/ :
                            (type === 'password' ? /^[A-Za-z\d@$!%*#?&]{8,}$/ :
                                (type === 'number' ? /^[0-9]{1,}$/ :
                                    (type === 'text' ? /^(?!\s*$)[a-z ,.'-~ãõçáéíóàè]+$/i :
                                        (type === 'latlon' ? /^(-+)([*0-9]{2})+\.[*0-9]{2,8}$/ :
                                            /[a-zA-Z0-9]/)))),
                    })}
                />
            }
        </>
    )
}

export { InputForm }