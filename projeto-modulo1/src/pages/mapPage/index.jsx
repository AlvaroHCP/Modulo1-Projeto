import { Map } from "../../components/Leaflet-React"
import { Header } from "../../components/Header"
import { StoredDrugStores } from "../../Scripts/StoredDrogStores"
import { DivStyled } from "./styled"

import Slider from '@mui/material/Slider';


function MapPage() {

    let radius = 0

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
                    address={{
                        "zip": "88036-003",
                        "street": "Rua Lauro Linhares",
                        "numberStreet": "700",
                        "district": "Trindade",
                        "city": "Florianópolis",
                        "uf": "SC"
                    }}></Map>

            </DivStyled>
        </>
    )
}

export { MapPage }