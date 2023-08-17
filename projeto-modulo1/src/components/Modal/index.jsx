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
                    <h2 style={{ textAlign: 'center' }}>Seja muito bem vindo!</h2>
                    <h3 style={{ marginBottom: '0px', textAlign: 'center' }}>Para que página deseja ir?</h3>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p>Você pode esolher a Página de Medicamentos, onde verá todo o nosso estoque
                            dos mais variados produtos farmacêuticos disponíveis, ou pode escolher
                            procurar uma farmácia perto de você, no Mapa de Farmácias.</p>

                        <p>É só clicar em um dos botões correspondentes abaixo, e será redirecionado
                            para a página em questão.</p>
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