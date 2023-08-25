import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DivStyled } from "./styled"
import { PopperCard } from '../../components/PopperCard'
import { CardDrugs } from '../../components/CardDrugs'


import { StoredDrugsList } from '../../Scripts/StoredDrugsList'
import { RefreshPage } from '../../Scripts/RefreshPage'


function DrugsListPage() {

    let loadedData = []
    const clickAndLoad = () => {
        StoredDrugsList()
        // Refreshing the page
        RefreshPage()
    }
    const dataName = 'DrugsList'
    loadedData = JSON.parse(localStorage.getItem(dataName)) || []


    let keysArray = []
    Object.keys(loadedData[0]).forEach(e => {
        keysArray.push(e)
    })
    console.log(keysArray)


    const name = keysArray[2]
    const medicinDose = keysArray[4]
    const laboratory = keysArray[3]
    const description = keysArray[0]
    const cost = keysArray[5]
    const drugType = keysArray[1]
    // console.log(name)


    return (
        <>
            <Header></Header>

            <DivStyled>
                {loadedData.length == 0 ?
                    (<div style={{ width: '50%', margin: '40px', textAlign: 'center' }}>
                        <h2>
                            Não Há Medicamentos Cadastrados!
                        </h2>
                        <p>
                            Por favor, cadastre algum, e depois volte para vê-los organizados aqui.
                        </p>
                        <h3>Se quiser, pode carregar informações já preenchidas clicando no botão abaixo.</h3>

                        <button
                            onClick={clickAndLoad}
                            style={{ marginTop: '20px' }}
                        >
                            Carregar Informações de Medicamentos
                        </button>

                        {/* <button
                            onClick={clickAndChange}
                            style={{ marginTop: '20px', backgroundColor: "lightblue", border: 'solid green' }}
                            >
                            Trocar o mapa para outra cidade
                        </button> */}
                    </div>) :
                    <></>
                }

                <div style={{
                    width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'
                }}>
                    {
                        loadedData.map(drug => {
                            // console.log(Object.keys(drug))
                            // console.log(drug['Nome do Medicamento']);
                            return (
                                <PopperCard
                                    name={drug[keysArray[2]]}
                                    medicinDose={drug[keysArray[4]]}
                                    laboratory={drug[keysArray[3]]}
                                    description={drug[keysArray[0]]}
                                    cost={drug[keysArray[5]]}
                                    drugType={drug[keysArray[1]]}
                                    key={drug[keysArray[2]]}
                                    style={{ width: '20%' }}
                                >
                                    <CardDrugs
                                        name={drug[keysArray[2]]}
                                        medicinDose={drug[keysArray[4]]}
                                        cost={drug[keysArray[5]]}
                                    >
                                    </CardDrugs>
                                </PopperCard>
                            )
                        })
                    }
                </div>

            </DivStyled >

            <Footer></Footer>
        </>
    )
}

export { DrugsListPage }