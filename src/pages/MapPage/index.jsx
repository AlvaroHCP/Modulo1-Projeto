import { Map } from "../../components/Leaflet-React"
import { Header } from "../../components/Header"
import { Footer } from '../../components/Footer'
import { StoredDrugStores } from "../../Scripts/StoredDrugStores"
import { DivStyled } from "./styled"
import { useState } from "react"


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { TextField } from "@mui/material"


import { RefreshPage } from "../../Scripts/RefreshPage"


function MapPage() {

    const dataName = 'DrugStores'
    const [loadedData, setLoadedData] = useState(JSON.parse(localStorage.getItem(dataName)) || [])

    const clickAndLoad = () => {
        StoredDrugStores(true)
        setLoadedData(JSON.parse(localStorage.getItem(dataName)))
        // Refreshing the page
        // RefreshPage()
    }

    const positionRJ = [-22.896844, -43.275549]
    const addressRJ = [{ 'Bairro': 'Méier', 'Cidade': 'Rio de Janeiro', 'UF': 'RJ', 'Latitude': positionRJ[0], 'Longitude': positionRJ[1] }]

    // const positionSC = [-27.595976, -48.520891]
    // const addressSC = [{
    //     "Latitude": "-27.5944418",
    //     "Longitude": "-48.52081496678028",
    //     "zip": "88036-003",
    //     "street": "Rua Lauro Linhares",
    //     "numberStreet": "700",
    //     "district": "Trindade",
    //     "city": "Florianópolis",
    //     "uf": "SC"
    // },
    // {
    //     "Latitude": "-27.597263",
    //     "Longitude": "-48.522010",
    //     "zip": "88040-400",
    //     "street": "R. Des. Vítor Lima",
    //     "numberStreet": "200",
    //     "district": "Trindade",
    //     "city": "Florianópolis",
    //     "uf": "SC"
    // }]

    let position = positionRJ
    let address = addressRJ

    // const clickAndChange = (position, address) => {
    //     const newLatitude = prompt('Digite Latitude da cidade.')
    //     const newLongitude = prompt('Digite Longitude da cidade.')
    //     position = [newLatitude, newLongitude]
    //     address = [{ 'Latitude': newLatitude, 'Longitude': newLongitude }]
    // }
    // console.log(position, address)

    const minRadius = 10
    const maxRadius = 2000
    const initialRadius = minRadius < 10 ? 100 : minRadius
    const [radius, setRadius] = useState(initialRadius)


    // const handleChange = (event, newValue) => {
    //     setRadius(newValue);
    // };

    const handleSliderChange = (event, newValue) => {
        setRadius(newValue);
        // console.log(newValue);
    };

    const handleInputChange = (event) => {
        setRadius(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (radius < minRadius) {
            setRadius(minRadius);
        } else if (radius > maxRadius) {
            setRadius(maxRadius);
        }
    };


    return (
        <>
            <Header></Header>
            <DivStyled>

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



                <Box sx={{ width: 400 }} >
                    <Typography id="radius-slider" >
                        Distância (em metros)
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        {/* <VolumeDown /> */}
                        <Slider
                            aria-label="Raio"
                            min={minRadius}
                            // step={1}
                            max={maxRadius}
                            value={radius}
                            valueLabelDisplay="on"
                            onChange={handleSliderChange}
                            aria-labelledby="radius-slider"
                        />
                        {/* <VolumeUp /> */}
                        <TextField
                            value={radius}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                // step: 10,
                                min: minRadius,
                                max: maxRadius,
                                type: 'number',
                                'aria-labelledby': 'radius-slider',
                            }}
                            style={{ width: '72px' }}
                            variant={"standard"}
                        />
                    </Stack>
                </Box>


                <Map
                    radiusState={radius}
                    position={position}
                    addressList={loadedData.length > 0 ? loadedData : address}
                ></Map>

            </DivStyled>
            <Footer></Footer>
        </>
    )
}

export { MapPage }