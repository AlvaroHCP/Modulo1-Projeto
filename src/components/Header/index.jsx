import { HeaderStyled } from './styled'
import { Grid, Button } from '@mui/material'
import { ButtonImageRoutes } from '../ButtonImageRoutes'

import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import BedtimeIcon from '@mui/icons-material/Bedtime';
// import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';
import LightModeIcon from '@mui/icons-material/LightMode';
import { BsSunFill } from "react-icons/bs";

import { FaPills } from "react-icons/fa";


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
                    {/* <BedtimeOffIcon /> */}
                    <LightModeIcon
                        style={{ marginLeft: '3px', fontSize: '32px', padding: '2px' }}
                    />
                    {/* <BsSunFill
                        style={{ fontSize: '31px', padding: '3px' }}
                    /> */}
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

                <div
                    style={{ paddingTop: '18px', display: 'flex', justifyContent: 'center' }}
                >
                    {/* <TextField
                        style={{ width: '600px', backgroundColor: 'white', borderRadius: '12px' }}
                        // variant="standard"
                        label={'Pesquise aqui o que precisa.'}
                        type={'search'}
                        size="small"
                    /> */}
                    <Paper
                        component="form"
                        sx={{ my: 1, p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Pesquise aqui o que precisa."
                            inputProps={{ 'aria-label': 'search bar' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>

                <div id='grid'>
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

                        {/* <FaPills></FaPills> */}

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
                </div>

            </HeaderStyled >
        </>
    )
}

export { Header }