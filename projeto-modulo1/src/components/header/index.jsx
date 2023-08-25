import { HeaderStyled } from './styled'
import { Grid, Button } from '@mui/material'
import { ButtonImageRoutes } from '../ButtonImageRoutes'

import BedtimeIcon from '@mui/icons-material/Bedtime';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';

function Header() {

    const toggleMode = () => {
        alert("Changing Mode!")
        // setMode(mode === 'dark' ? 'light' : 'dark');
    };

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

                <Button onClick={toggleMode}
                // sx={{ mr: 0 }}
                >
                    {/* <img
                        src="https://img.icons8.com/?size=512&id=AzYziyKyf28h&format=png"
                        alt="Dark Mode" /> */}
                    <BedtimeIcon />
                    <BedtimeOffIcon />

                </Button>

            </HeaderStyled >
        </>
    )
}

export { Header }