import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { ButtonAreaStyled } from './styled';

function Modal() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (path) => {
        setOpen(false);
        navigate(path)
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <ButtonAreaStyled>
                    <Button
                        onClick={() => navigate('/ListaMedicamentos')}
                        autoFocus
                    >
                        Página de Medicamentos
                    </Button>
                    <Button
                        onClick={() => navigate('/MapaFarmacias')}
                        autoFocus
                    >
                        Mapa de Farmácias
                    </Button>
                </ButtonAreaStyled>
            </Dialog>
        </div>
    );
}

export { Modal }