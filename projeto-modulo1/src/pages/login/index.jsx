import { useForm } from "react-hook-form"

function LoginPage() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (dataFromForm) => {
        alert('Proceed...')
        localStorage.setItem('user', JSON.stringify(dataFromForm))
    }


    return (
        <>
            <h1>Login Page</h1>
            <form>
                <input type="email" {...register('email', {
                    required: true,
                    pattern: /[A-Za-z]{3}[@a-z]{3}/
                })} />
                <input type="password" {...register('password', {
                    required: true,
                    pattern: /[a-zA-Z0-9@!#]{8}/
                })} />

                <a href="#">Esqueci minha senha?</a>

                <button onClick={handleSubmit(onSubmit)} >Entrar</button>
            </form >
        </>
    )
}

export { LoginPage }