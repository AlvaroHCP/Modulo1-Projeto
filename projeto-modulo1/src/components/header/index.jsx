import { HeaderStyled } from './styled'
import { Grid, Button } from '@mui/material'
import { ButtonImageRoutes } from '../ButtonImageRoutes'

import BedtimeIcon from '@mui/icons-material/Bedtime';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';


import { useLightDarkTheme } from '../../hooks/useLightDarkTheme'


function Header() {

    const { darkMode, setDarkMode } = useLightDarkTheme()

    const toggleMode = () => {
        // console.log(darkMode)
        // console.log("Changing Mode!\n\n\n")
        // alert("Changing Mode!")
        setDarkMode(darkMode == false ? true : false)
    };

    const lightDarkModeIcon = (darkMode) => {
        if (darkMode == false) {
            return (
                <div
                    style={{
                        color: 'darkblue',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                >
                    <BedtimeIcon />
                    <p
                        style={{ fontSize: '10px' }}
                    >Dark Mode</p>
                </div>
            )
        } else {
            return (
                <div
                    style={{
                        // color: 'lightblue',
                        color: 'white',
                        // color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                >
                    <BedtimeOffIcon />
                    <p
                        style={{ fontSize: '10px' }}
                    >light Mode</p>
                </div>
            )
        }
    }

    return (
        <>
            <HeaderStyled>

                <Grid container
                    width={'85%'}
                    justifyItems={"space-around"}
                    display={'grid'}
                    gap={1}
                    gridTemplateColumns={{
                        xs: 'repeat(2, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                >

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=14096&format=png"}
                        altName={"Icone Pessoa"}
                        route={"/DrugsList"}
                        buttonName={"Medicamentos"}
                    />

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=9emOgiekluvM&format=png"}
                        altName={"Icone Projetos"}
                        route={"/DrugsSubs"}
                        buttonName={"Cadastrar Medicamento"}
                    />

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=23400&format=png"}
                        altName={"Icone Projetos"}
                        route={"/DrugStoresMap"}
                        buttonName={"Mapa de Farmácias"}
                    />

                    <ButtonImageRoutes
                        imageSource={"https://img.icons8.com/?size=512&id=9emOgiekluvM&format=png"}
                        altName={"Icone Projetos"}
                        route={"/DrugStoresSubs"}
                        buttonName={"Cadastrar Farmácia"}
                    />

                </Grid>

                <Button onClick={() => toggleMode()}
                // sx={{ mr: 0 }}
                >
                    {lightDarkModeIcon(darkMode)}
                </Button>

            </HeaderStyled >
        </>
    )
}

export { Header }