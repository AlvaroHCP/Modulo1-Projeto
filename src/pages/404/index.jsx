import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageNotFound } from './styled'
import { ButtonArea } from './styled'
import Button from '@mui/material/Button';

function NotFound404() {
    const navigate = useNavigate()
    let timer = 5000

    const goTo = (path) => {
        navigate(path)
    }

    useEffect(() => {
        setTimeout(() => {
            goTo('/DrugsList')

        }, timer)
    }, [])

    const goBack = (event) => {
        event.preventDefault
        navigate(-1)
    }

    return (
        // <h1 style={{ textAlign: "center" }}>Erro 404. Página não encontrada</h1>
        <>
            <PageNotFound>
                <section style={{ width: '800px' }}>
                    <h1>
                        Erro 404. Página não encontrada!
                    </h1>
                    <p style={{ textAlign: 'center' }}>
                        Você será redirecionado para a <u>Página de Medicamentos</u> em <br /> {timer / 1000} segundos!!!
                    </p>
                    <h3>Ou clique no botão abaixo para voltar à página anterior!</h3>
                    <ButtonArea>
                        {/* <button onClick={(event) => goBack(event)}>Voltar</button> */}
                        <Button
                            onClick={(event) => goBack(event)}
                            autoFocus
                        >
                            <b>Página Anterior</b>
                        </Button>
                    </ButtonArea>
                </section>
            </PageNotFound>
        </>
    )
}

export { NotFound404 }