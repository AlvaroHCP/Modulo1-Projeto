import { TextField } from "@mui/material";


function InputForm({ name, title, type, required, readOnly }) {
    required != true ? required = false : required = true
    readOnly != true ? readOnly = false : readOnly = true

    return (
        <TextField
            id={name}
            variant="standard"
            required={required}
            label={title}
            type={type}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                readOnly: readOnly,
            }}
        />
    )
}

export { InputForm }