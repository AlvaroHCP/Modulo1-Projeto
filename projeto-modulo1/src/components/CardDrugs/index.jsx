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
        <CardStyled sx={{ width: '260px', height: '450px', textAlign: 'center' }}>

            <CardActions style={{ height: '20px', placeContent: 'end' }}>
                <IconButton aria-label="add to favorites" onClick={e => favouriteClick(e)}>
                    <FavoriteIcon
                        sx={{ color: color.current }}
                    />
                </IconButton>
            </CardActions>

            <CardActionArea>

                {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton> */}

                <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/fotos-gratis/frasco-de-remedio-derramando-pilulas-coloridas-retratando-riscos-de-dependencia-de-ia-generativa_188544-12529.jpg?w=2000"
                    alt="green iguana"
                />

                <CardContent
                    // style={{ textAlign: 'center' }}
                    style={{ height: '230px', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between' }}
                >
                    <Typography gutterBottom variant="h5" component="div"
                        sx={{ mt: '10px' }}
                    >
                        {name}
                    </Typography>

                    <Typography variant="body1" color="text.primary"
                    // style={{ marginTop: '0px' }}
                    >
                        {medicinDose}
                    </Typography>

                    <Typography variant="h6" color="text.primary"
                        style={{ marginTop: '14px', fontSize: '18px' }}
                    >
                        {drugType == 'Medicamento Controlado' ?
                            <u><b>{drugType}</b></u> :
                            <>{drugType}</>}
                    </Typography>

                    <Typography variant="h6" color="text.secondary"
                        style={{ marginTop: '16px', textDecoration: 'line-through', fontSize: '14px' }}
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