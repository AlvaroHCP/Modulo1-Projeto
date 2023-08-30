import './style.css'
import { ModalStyled } from './styled';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Modal({ children, buttonName = '', openDirectly, hold }) {
    // Children represents the buttons or other components the user wants to put inside 
    // the Modal.
    // buttonName is the name of the button to launch the modal.
    // Bool: openDirectly is to open the Modal directly without the need of the button to launch it.
    // Bool: hold is for hold the Modal or close with a click.

    const [open, setOpen] = useState(openDirectly == true ? openDirectly = true : openDirectly = false)

    const handleClickOpen = () => {
        buttonName != '' ? setOpen(true) : setOpen(false)
    };

    const handleClose = () => {
        hold != true ? setOpen(false) : hold
    };

    return (
        <ModalStyled>
            {buttonName != '' ? <Button>
                <button onClick={handleClickOpen} >Entrar</button>
            </Button> : <></>}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ backgroundColor: 'aquamarine' }}
            >
                <DialogTitle id="alert-dialog-title">
                    <h2>Seja muito bem vindo!</h2>
                    <h3>Para que página deseja ir?</h3>
                </DialogTitle>
                <DialogContent
                >
                    <DialogContentText id="alert-dialog-description">
                        <p>Você pode esolher a Página de Medicamentos, onde verá todo o nosso estoque
                            dos mais variados produtos farmacêuticos disponíveis, ou pode escolher
                            procurar uma farmácia perto de você, no Mapa de Farmácias.</p>

                        <p>É só clicar em um dos botões correspondentes abaixo, e será redirecionado
                            para a página em questão.</p>
                    </DialogContentText>
                </DialogContent>
                {children}
            </Dialog>
        </ModalStyled>
    );
}

export { Modal }