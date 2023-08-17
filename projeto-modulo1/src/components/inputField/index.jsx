import { TextField } from "@mui/material";


function InputForm({ error, name, title, type, required, readOnly }) {

    required != true ? required = false : required = true
    readOnly != true ? readOnly = false : readOnly = true

    let erMessage = 'Error'
    let incorrectEntry = "Incorrect entry."

    if (error == true) {
        title = erMessage
    } else { error = false }

    return (
        <>
            <TextField
                error={error}
                id={name}
                variant="standard"
                required={required}
                label={title}
                type={type}
                helperText={incorrectEntry}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    readOnly: readOnly,
                }}
            />
            <TextField
                error={true}
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="standard"
            />
        </>
    )
}

export { InputForm }