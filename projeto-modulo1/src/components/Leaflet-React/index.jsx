import 'leaflet/dist/leaflet.css';
// import { MapContainer } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet';
import { MapContainerStyled } from "./styled"
import { TileLayer, Circle } from 'react-leaflet';


function Map({ position, addressList, radius = 100, scale = (17 || (radius != undefined && radius != 0) / 20) }) {
    console.log(addressList);
    // console.log(radius.toString().length)


    // Zoom em função do Raio
    // É uma função não linear. Especificamente é em escala logarítmica. 


    // scale = 8   -  radius = 100000
    // scale = 9   -  radius = 70000
    // scale = 10  -  radius = 40000
    // scale = 11  -  radius = 10000
    // scale = 12  -  radius = 7000  - s/r = 2/6000
    // scale = 13  -  radius = 4000  - s/r = 1/3000 = 1/1000
    // scale = 13.5  -  radius = 2500  - s/r = 1/3000 = 1/1000
    // scale = 13.6  -  radius = 2200  - s/r = 1/3000 = 1/1000
    // scale = 13.7  -  radius = 1900  - s/r = 1/3000 = 1/1000
    // scale = 13.8  -  radius = 1600  - s/r = 1/3000 = 1/1000
    // scale = 13.9  -  radius = 1300  - s/r = 1/3000 = 1/1000
    // scale = 14  -  radius = 1000  - s/r = 3/900 = 1/300
    // scale = 15  -  radius = 700
    // scale = 15.5  -  radius = 550
    // scale = 16  -  radius = 400  -s/r = 1/300 
    // scale = 16.5  -  radius = 250  - s/r = 0.5/150 = 0.00333333
    // scale = 17  -  radius = 100  


    // A razão fica constante dentro de cada ordem de grandeza. 
    // Para 3 fica em  1 / 300
    // Para 4 fica em 1 / 1000


    const scaleFromRadius = (radius) => {
        const radiusLength = radius.toString().length

        if (radius < 100) {
            radius = 100
            scale = 17
        }
        if (radius > 4000) {
            radius = 4000
            scale = 13
        }
        if (radiusLength == 3) {
            const constant = 1 / 300
            scale = 17 - constant * (radius - 100)
        }
        if (radiusLength == 4) {
            const constant = 1 / 1000
            scale = 14 - constant * (radius - 1000)
        }
        // console.log('\n\n');
        // console.log('Raio = ', radius)
        // console.log('Actual Scale = ', scale)
    }


    scaleFromRadius(radius)


    return (
        <MapContainerStyled center={position} zoom={scale} style={{ width: "800px", height: "450px" }}>

            <Circle center={position}
                fillColor="blue"
                radius={radius} />

            {addressList.map((address, index) => {
                // console.log(address.latitude, address.longitude)
                return (
                    <Marker position={[address.latitude, address.longitude]} key={index}>

                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Popup>
                            {
                                Object.keys(address).map((key, index) => {
                                    return (
                                        <p key={index}>
                                            {key}: {address[key]}
                                        </p>
                                    )
                                })
                            }
                        </Popup>

                    </Marker>
                )
            })}

        </MapContainerStyled>
    );
}

export { Map }