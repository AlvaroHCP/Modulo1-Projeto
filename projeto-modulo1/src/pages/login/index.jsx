import { useForm } from "react-hook-form"
import { LoginStyled } from './styled'

function LoginPage() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (dataFromForm) => {
        // alert('Proceed...')
        // alert(dataFromForm.email)
        // alert(dataFromForm.password)
        localStorage.setItem('user', JSON.stringify(dataFromForm))
    }


    return (
        <>
            <LoginStyled>
                <h1>Login Page</h1>
                <form>
                    <input type="email" {...register('email', {
                        required: true,
                        pattern: /[A-Za-z0-9]{3}@*\.[a-z]{2}/,
                        setValueAs: v => v.trim()
                    })} />
                    <input type="password" {...register('password', {
                        required: true,
                        pattern: /[a-zA-Z0-9@!#]{8}/
                    })} />

                    <a href="#">Esqueci minha senha?</a>

                    <button onClick={handleSubmit(onSubmit)} >Entrar</button>
                </form >
            </LoginStyled>
        </>
    )
}

export { LoginPage }