import './styled.js'
import { TextField } from "@mui/material";


function InputForm({ error, name, title, type, required, readOnly, storage, errorStorage, style }) {

    required != true ? required = false : required = true
    readOnly != true ? readOnly = false : readOnly = true

    // console.log(title, error)

    // let erMessage = 'Error'
    let erTitle = title
    let message
    let erMessage
    let defaultField
    let validText


    switch (type) {
        case 'email':
            message = 'seunome@dominio.algo'
            erMessage = 'seunome@dominio.algo'
            defaultField = 'nome@email.com'

            break

        case 'password':
            message = ''
            erMessage = ''
            defaultField = '12345678'

            break

        case 'number':
            message = 'Digite apenas números.'
            erMessage = 'Digite apenas números.'
            defaultField = '1234567890'

            break

        case 'text':
            message = ''
            erMessage = ''
            defaultField = title

            break

        case 'latlon':
            message = ''
            erMessage = ''
            defaultField = '-22,876'

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
                    error={errorStorage[title] == undefined || errorStorage[title].type != 'pattern' ? false : true}
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
                        pattern: type === 'email' ? /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{1,}$/ :
                            (type === 'password' ? /^[A-Za-z\d@$!%*#?&]{8,}$/ :
                                (type === 'number' ? /[0-9]/ :
                                    (type === 'text' ? /^(?!\s*$)[a-z ,.'-~ãõç]+$/i :
                                        (type === 'latlon' ? /^(-+)[*0-9]{2},[*0-9]{1,8}$/ :
                                            /[a-zA-Z0-9]/)))),
                    })}
                />
            }
        </>
    )
}

export { InputForm }