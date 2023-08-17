import { useForm } from "react-hook-form"
import { DivStyled, LoginStyled, FormStyled, ButtonDiv } from './styled'
import { Link } from "react-router-dom"

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (dataFromForm) => {

        alert(`Usuário logado com sucesso!

E-mail: ${dataFromForm.email}

Senha: ${dataFromForm.password}

Bem vindo!`)

        localStorage.setItem('user', JSON.stringify(dataFromForm))

    }


    return (
        <DivStyled>
            <LoginStyled >
                <h1>Login Page</h1>
                <FormStyled>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Formato: email@dominio.algo"
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{1,}$/,
                            setValueAs: v => v.trim().replace(" ", "")
                        })}
                    />
                    {errors.email && errors.email.type === "pattern" && (
                        <input
                            role="alert"
                            placeholder="Fora do formato: email@dominio.algo"
                            disabled
                            style={{
                                backgroundColor: 'pink',
                                border: '1px solid red',
                                borderRadius: '3px'
                            }} />
                    )}

                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password" {...register('password', {
                        required: true,
                        pattern: /^[A-Za-z\d@$!%*#?&]{8,}$/
                    })}
                        placeholder="Senha com 8 ou mais caracteres."
                    />
                    {errors.password && errors.password.type === "pattern" && (
                        <input
                            role="alert"
                            placeholder="Senha com menos de 8 caracteres!"
                            disabled
                            style={{
                                backgroundColor: 'pink',
                                border: '1px solid red',
                                borderRadius: '3px'
                            }} />
                    )}

                    <Link to={"#"}>Esqueci minha senha?</Link>
                    <ButtonDiv>
                        <button onClick={handleSubmit(onSubmit)} >Entrar</button>
                    </ButtonDiv>
                </FormStyled>
            </LoginStyled>
        </DivStyled>
    )
}

export { LoginPage }