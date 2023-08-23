import { Map } from "../../components/Leaflet-React"
import { Header } from "../../components/Header"
import { StoredDrugStores } from "../../Scripts/StoredDrogStores"
import { DivStyled } from "./styled"

import Slider from '@mui/material/Slider';


function MapPage() {

    let radius = 100

    StoredDrugStores()

    return (
        <>
            <Header></Header>
            <DivStyled>
                {/* <TextField>

                </TextField> */}
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