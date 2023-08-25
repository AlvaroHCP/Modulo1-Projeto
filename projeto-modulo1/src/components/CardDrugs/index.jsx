import { CardStyled } from "./styled"

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


function CardDrugs({ name, medicinDose, cost }) {
    return (
        <CardStyled>

            <CardActions style={{ height: '20px', placeContent: 'end' }}>
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon />
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

                <CardContent style={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body1" color="text.primary" style={{ marginTop: '16px' }}>
                        {medicinDose}
                    </Typography>

                    <Typography variant="h6" color="text.secondary" style={{ marginTop: '16px', textDecoration: 'line-through', fontSize: '14px' }}>
                        {!!cost ? 1.1 * cost : ''}
                    </Typography>

                    <Typography variant="h6" color="text.primary" style={{ marginTop: '0px' }}>
                        {cost}
                    </Typography>

                </CardContent>

            </CardActionArea>
        </CardStyled>
    )
}

export { CardDrugs }