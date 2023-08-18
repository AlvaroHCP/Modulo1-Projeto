import './styled.js'
import { TextField } from "@mui/material";


function InputForm({ error, name, title, type, required, readOnly, storage, errorStorage }) {

    required != true ? required = false : required = true
    readOnly != true ? readOnly = false : readOnly = true

    // let erMessage = 'Error'
    let erTitle = title
    let message
    let erMessage


    switch (type) {
        case 'email':
            message = 'seunome@dominio.algo'
            erMessage = 'seunome@dominio.algo'

            break

        case 'password':
            message = ''
            erMessage = ''

            break

        case 'number':
            message = 'Digite apenas números.'
            erMessage = 'Digite apenas números.'

            break

        case 'text':
            message = ''
            erMessage = ''

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
        // console.log(Object.keys(errorStorage))       
        // console.log(errorStorage[title].type)
        if (errorStorage[title]?.type) {
            console.log(errorStorage[title].type)
            return
        }
        console.log(errorStorage[title] == undefined)
    }

    return (
        <>
            {errorStorage[title] == undefined || errorStorage[title].type != 'pattern' ? (
                <TextField
                    error={error}
                    id={name}
                    variant="standard"
                    required={required}
                    label={title}
                    type={type}
                    helperText={message}
                    // onChange={errorInput(errorStorage)}
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
                                    (type === 'text' ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/ : /[a-zA-Z0-9]/))),
                        setValueAs: v => (v == '' || v == undefined) && required == true ?
                            errorStorage[title] = 'pattern' :
                            v
                    })}
                />) : (
                <TextField
                    error={error = true}
                    id={name}
                    variant="standard"
                    required={required}
                    label={title}
                    type={type}
                    helperText={erMessage}
                    // onChange={errorInput(errorStorage)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: readOnly,
                    }}
                    {...storage(title, {
                        pattern: type === 'email' ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{1,}$/ :
                            (type === 'password' ? /^[A-Za-z\d@$!%*#?&]{8,}$/ :
                                (type === 'number' ? /[0-9]/ :
                                    (type === 'text' ? /[a-zA-Z0-9]/ : /[a-zA-Z0-9]/))),
                    })}
                />
            )
            }
        </>
    )
}

export { InputForm }