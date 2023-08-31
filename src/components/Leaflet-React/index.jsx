import 'leaflet/dist/leaflet.css';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { MapContainerStyled } from "./styled"
import { TileLayer, Circle } from 'react-leaflet';
import { useState, useEffect } from 'react';

import { useMap } from "react-leaflet";
import { Icon } from 'leaflet';
// import { useMapEvent } from "react-leaflet";


function SetScale({ scale }) {
    const map = useMap()
    // const map = useMapEvent('change', () => {
    //     map.setZoom(scale)
    // })
    map.setZoom(scale)
    // console.log(map.getZoom())
    return null
}

export { SetScale }



function Map({ position, addressList, radiusState, scaleState }) {
    // console.log(position);
    // console.log(addressList);
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



    const [scale, setScale] = useState(scaleState || 20)
    const [radius, setRadius] = useState(radiusState || 200)

    const scaleFromRadius = (radius) => {
        const radiusLength = radius.toString().length

        if (radius < 10) {
            setRadius(10)
            setScale(20)
        } else if (10 < radius && radius < 100) {
            setScale(18)
        }
        if (radius > 4000) {
            setRadius(4000)
            setScale(13)
        }
        if (radiusLength == 3) {
            const constant = 1 / 300
            setScale(17 - constant * (radius - 100))
        }
        if (radiusLength == 4) {
            const constant = 1 / 1000
            setScale(14 - constant * (radius - 1000))
        }
        // console.log('\n\n');
        // console.log('Raio = ', radius)
        // console.log('Actual Scale = ', scale)
    }


    useEffect(() => {
        setRadius(radiusState)
        scaleFromRadius(radiusState)
        // position = position.map(e => e + 0.0002)
        // console.log(scale, radius);
    }, [radiusState])



    const customIcon = new Icon({
        iconUrl: "https://www.clipartmax.com/png/small/189-1895092_pill-png-capsule-clipart.png",
        iconSize: [38, 38],
    })


    return (
        <MapContainerStyled center={position} zoom={scale} scrollWheelZoom={true}>
            {/* {console.log("Radius = ", radius, " Scale = ", scale)} */}

            <SetScale scale={scale} />

            <Circle
                center={position}
                fillColor="red"
                color='blue'
                radius={radius}
            />

            {addressList.map((address, index) => {
                // console.log(address.Latitude, address.Longitude)
                return (
                    <Marker position={[address.Latitude, address.Longitude]} key={index}
                        icon={customIcon}
                    >

                        <Tooltip>
                            {address?.name ? address.name :
                                (address.Latitude == position[0] && address.Longitude == position[1] ?
                                    'Você está Aqui' :
                                    `Farmácia ${index + 1}`)
                            }
                        </Tooltip>

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