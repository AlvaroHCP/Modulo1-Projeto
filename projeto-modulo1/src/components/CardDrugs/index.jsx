import { CardStyled } from "./styled"


import { useState, useRef, useEffect } from "react";


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


function CardDrugs({ name, medicinDose, drugType, cost }) {

    const previousCost = !!cost ? (1.1 * parseFloat(cost)).toFixed(2) : ""


    const favouriteUnclicked = 'lightblue'
    const favouriteClicked = 'red'
    const [favouriteColor, setFavouriteColor] = useState(favouriteUnclicked)

    const color = useRef(favouriteUnclicked)

    useEffect(() => {
        // alert(color.current)
    }, [favouriteColor])

    const toggleFavouriteColor = () => {
        color.current == favouriteUnclicked ?
            color.current = favouriteClicked :
            color.current = favouriteUnclicked
    }
    function favouriteClick(e) {
        e.stopPropagation()
        toggleFavouriteColor()
        setFavouriteColor(color.current)
    }


    return (
        <CardStyled sx={{ width: '260px', height: '450px' }}>

            <CardActions sx={{ height: '30px', mb: '0px', placeContent: 'end' }}>
                {/* <IconButton aria-label="add to favorites" onClick={e => favouriteClick(e)}>
                    <FavoriteIcon
                        sx={{ color: color.current }}
                    />
                </IconButton> */}

                {/* input type Button */}
                <div>
                    <img
                        src='https://img.icons8.com/?size=512&id=O8nhnATsSrC6&format=png'
                        alt='Botão de Favorito'
                        onClick={e => favouriteClick(e)}
                        style={{ color: 'blue', width: '600px', height: '800px' }}
                    />
                </div>

                <div
                    style={{ marginTop: '10px' }}
                >
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBjyCtabv9ckpANVQxg0pVx4rUSWUuMrLNqisT8iZsexkjXBfb2kLoLOHBU4dImF7v7E&usqp=CAU'
                        alt='Botão de Favorito'
                        onClick={e => favouriteClick(e)}
                        style={{ color: color.current, width: '30px' }}
                    />
                </div>

            </CardActions>

            <CardActionArea
                sx={{ height: '420px', m: '0px', p: '0px' }}
            >

                {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton> */}

                <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/fotos-gratis/frasco-de-remedio-derramando-pilulas-coloridas-retratando-riscos-de-dependencia-de-ia-generativa_188544-12529.jpg?w=2000"
                    alt="green iguana"
                    sx={{ mt: '-10px' }}
                />

                <CardContent
                    // style={{ textAlign: 'center' }}
                    style={{ height: '270px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between' }}
                >
                    <Typography gutterBottom variant="h5" component="div"
                        sx={{ mt: '16px', mb: '14px' }}
                    >
                        {name}
                    </Typography>

                    <Typography variant="body1" color="text.primary"
                    // style={{ marginTop: '12px' }}
                    >
                        {medicinDose}
                    </Typography>

                    <Typography variant="h6" color="text.primary"
                        style={{ marginTop: '18px', fontSize: '18px' }}
                    >
                        {drugType == 'Medicamento Controlado' ?
                            <u><b>{drugType}</b></u> :
                            <>{drugType}</>}
                    </Typography>

                    <Typography variant="h6" color="text.secondary"
                        style={{ marginTop: '18px', textDecoration: 'line-through', fontSize: '14px' }}
                    >
                        De R${previousCost}
                    </Typography>

                    <Typography variant="h6" color="text.primary"
                        style={{ marginTop: '0px' }}
                    >
                        R$  {cost}
                    </Typography>

                </CardContent>

            </CardActionArea>
        </CardStyled>
    )
}

export { CardDrugs }