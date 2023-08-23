import { Map } from "../../components/Leaflet-React"
import { Header } from "../../components/Header"
import { StoredDrugStores } from "../../Scripts/StoredDrogStores"
import { DivStyled } from "./styled"
import { useState, useEffect } from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';


function MapPage() {

    StoredDrugStores()


    const [radius, setRadius] = useState(500)
    const minRadius = 10
    const maxRadius = 1000

    // const handleChange = (event, newValue) => {
    //     setRadius(newValue);
    // };

    const handleSliderChange = (event, newValue) => {
        setRadius(newValue);
    };

    const handleInputChange = (event) => {
        setRadius(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (radius < 100) {
            setRadius(100);
        } else if (radius > 4000) {
            setRadius(4000);
        }
    };


    return (
        <>
            <Header></Header>
            <DivStyled>

                <Box sx={{ width: 400 }} >
                    <Typography id="input-slider" >
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
                            aria-labelledby="input-slider"
                        />
                        {/* <VolumeUp /> */}
                        <MuiInput
                            value={radius}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                // step: 10,
                                min: minRadius,
                                max: maxRadius,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                            style={{ width: '42px' }}
                        />
                    </Stack>
                </Box>

                <Map
                    radius={radius}
                    position={[-27.5944418, -48.52081496678028]}
                    addressList={[{
                        "latitude": "-27.5944418",
                        "longitude": "-48.52081496678028",
                        "zip": "88036-003",
                        "street": "Rua Lauro Linhares",
                        "numberStreet": "700",
                        "district": "Trindade",
                        "city": "Florianópolis",
                        "uf": "SC"
                    },
                    {
                        "latitude": "-27.597263",
                        "longitude": "-48.522010",
                        "zip": "88040-400",
                        "street": "R. Des. Vítor Lima",
                        "numberStreet": "200",
                        "district": "Trindade",
                        "city": "Florianópolis",
                        "uf": "SC"
                    }
                    ]}></Map>

            </DivStyled>
        </>
    )
}

export { MapPage }