import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageNotFound } from './styled'

function NotFound404() {
    const navigate = useNavigate()
    let timer = 3000

    const goTo = (path) => {
        navigate(path)
    }

    useEffect(() => {
        setTimeout(() => {
            goTo('/')

        }, timer)
    })

    const goBack = (event) => {
        event.preventDefault
        navigate(-1)
    }

    return (
        // <h1 style={{ textAlign: "center" }}>Erro 404. Página não encontrada</h1>
        <>
            <PageNotFound>
                <h1>
                    Erro 404. Página não encontrada!
                </h1>
                <p>
                    Você está sendo redirecionado para a página principal em 3 segundos!!!
                </p>
                <h5>Ou clique no botão abaixo para voltar à página anterior!</h5>
                <button onClick={(event) => goBack(event)}>Voltar</button>
            </PageNotFound>
        </>
    )
}

export { NotFound404 }