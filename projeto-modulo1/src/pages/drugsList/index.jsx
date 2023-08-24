import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { StoredDrugsList } from '../../Scripts/StoredDrugsList'
import { RefreshPage } from '../../Scripts/RefreshPage'


function DrugsListPage() {

    let loadedData = []
    const clickAndLoad = () => {
        StoredDrugsList()
        // Refreshing the page
        RefreshPage()
    }
    const dataName = 'DrugStores'
    loadedData = JSON.parse(localStorage.getItem(dataName)) || []

    return (
        <>
            <Header></Header>

            {loadedData.length == 0 ?
                (<div style={{ width: '50%', margin: '40px', textAlign: 'center' }}>
                    <h2>
                        Não Há Farmácias Cadastradas!
                    </h2>
                    <p>
                        Por favor, cadastre alguma, e depois volte para vê-la no mapa.
                    </p>
                    <h3>Se quiser, pode carregar informações já preenchidas clicando no botão abaixo.</h3>

                    <button
                        onClick={clickAndLoad}
                        style={{ marginTop: '20px' }}
                    >
                        Carregar Informações do RJ
                    </button>

                    {/* <button
                            onClick={clickAndChange}
                            style={{ marginTop: '20px', backgroundColor: "lightblue", border: 'solid green' }}
                        >
                            Trocar o mapa para outra cidade
                        </button> */}
                </div>) : <></>}

            <Footer></Footer>
        </>
    )
}

export { DrugsListPage }