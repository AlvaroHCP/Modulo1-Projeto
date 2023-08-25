import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DivStyled } from "./styled"
import { CardDrugs } from '../../components/CardDrugs'


import { StoredDrugsList } from '../../Scripts/StoredDrugsList'
import { RefreshPage } from '../../Scripts/RefreshPage'


import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';


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

                        {/* <button
                            onClick={clickAndChange}
                            style={{ marginTop: '20px', backgroundColor: "lightblue", border: 'solid green' }}
                            >
                            Trocar o mapa para outra cidade
                        </button> */}
                    </div>) :
                    <></>
                }

                {/* <PopupState variant="popper" popupId="demo-popup-popper">
                    {(popupState) => ( */}
                <div>
                    <CardDrugs {...bindToggle(popupState)}>
                    </CardDrugs>
                    <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
                {/* )}
                </PopupState> */}

                <CardDrugs>
                </CardDrugs>

            </DivStyled>

            <Footer></Footer>
        </>
    )
}

export { DrugsListPage }