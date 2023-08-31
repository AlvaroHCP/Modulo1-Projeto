import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DivStyled } from "./styled"
import { PopperCard } from '../../components/PopperCard'
import { CardDrugs } from '../../components/CardDrugs'
import { BackDropCard } from '../../components/BackDropCard'


import { StoredDrugsList } from '../../Scripts/StoredDrugsList'
import { RefreshPage } from '../../Scripts/RefreshPage'


// import { useEffect } from 'react'
import { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button';


function DrugsListPage() {

    const dataName = 'DrugsList'
    const [loadedData, setLoadedData] = useState(JSON.parse(localStorage.getItem(dataName)) || [])

    const clickAndLoad = () => {
        StoredDrugsList(true)
        setLoadedData(JSON.parse(localStorage.getItem(dataName)))
        // Refreshing the page
        // RefreshPage()
    }

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

                        <Button
                            onClick={clickAndLoad}
                            // autoFocus
                            sx={{
                                marginTop: '30px',
                                mb: '30px',
                                width: '320px',
                                height: '30px',
                                fontSize: '12px',
                                backgroundColor: 'lightcyan',
                                // backgroundColor: 'lightskyblue',
                                border: '1px solid lightblue',
                                borderRadius: '5px',
                                // borderColor: 'lightgreen'
                            }}
                        >
                            Carregar Informações de Medicamentos
                        </Button>

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

                                        children1={<CardDrugs
                                            name={drug['Nome do Medicamento']}
                                            medicinDose={drug['Dosagem']}
                                            drugType={drug['Tipo de Medicamento']}
                                            cost={drug['Preço Unitário']}
                                        >
                                        </CardDrugs>}

                                        children2={<CardDrugs
                                            name={drug['Nome do Medicamento']}
                                            medicinDose={drug['Dosagem']}
                                            drugType={drug['Tipo de Medicamento']}
                                            cost={drug['Preço Unitário']}
                                            cardShow={true}
                                        >
                                        </CardDrugs>}

                                    >
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