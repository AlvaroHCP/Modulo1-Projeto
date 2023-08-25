import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DivStyled } from "./styled"
import { PopperCard } from '../../components/PopperCard'
import { CardDrugs } from '../../components/CardDrugs'
import { BackDropCard } from '../../components/BackDropCard'


import { StoredDrugsList } from '../../Scripts/StoredDrugsList'
import { RefreshPage } from '../../Scripts/RefreshPage'


import { Grid } from '@mui/material'


function DrugsListPage() {

    let loadedData = []

    const clickAndLoad = () => {
        StoredDrugsList()
        // Refreshing the page
        RefreshPage()
    }


    const dataName = 'DrugsList'
    loadedData = JSON.parse(localStorage.getItem(dataName)) || []


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

                    </div>) :
                    <Grid container
                        width={'85%'}
                        justifyItems={"center"}
                        display={'grid'}
                        gap={1}
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        }}
                    >

                        {
                            loadedData.map(drug => {
                                // console.log(Object.keys(drug))
                                // console.log(drug['Nome do Medicamento']);
                                return (
                                    <BackDropCard
                                        name={drug['Nome do Medicamento']}
                                        medicinDose={drug['Dosagem']}
                                        laboratory={drug['Laboratório']}
                                        description={drug['Descrição do Medicamento']}
                                        cost={drug['Preço Unitário']}
                                        drugType={drug['Tipo de Medicamento']}
                                        key={drug['Preço Unitário']}
                                        style={{ width: '20%' }}
                                    >
                                        <CardDrugs
                                            name={drug['Nome do Medicamento']}
                                            medicinDose={drug['Dosagem']}
                                            drugType={drug['Tipo de Medicamento']}
                                            cost={drug['Preço Unitário']}
                                        >
                                        </CardDrugs>
                                    </BackDropCard>
                                )
                            })
                        }

                    </Grid>
                }
            </DivStyled >

            <Footer></Footer>
        </>

    )
}

export { DrugsListPage }