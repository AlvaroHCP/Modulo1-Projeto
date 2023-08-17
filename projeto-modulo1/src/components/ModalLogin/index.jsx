import './style.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



// function Modal({ children }, { validation, dataFromForm, open }) {
function Modal({ children, buttonName = '', openDirectly }) {
    console.log('Received OpenModal = ', openDirectly)
    console.log('Received ButtonName = ', buttonName)

    console.log('AAAAA', openDirectly != true ? openDirectly = false : openDirectly = true)
    // console.log('OpenModal = ', openDirectly)

    const [open, setOpen] = useState(openDirectly == true ? openDirectly = true : openDirectly = false)
    console.log(open)

    const handleClickOpen = () => {
        buttonName != '' ? setOpen(true) : setOpen(false)
    };

    const handleClose = () => {
        // setOpen(false)
    };

    return (
        <div>
            {buttonName != '' ? <Button>
                <button onClick={handleClickOpen} >Entrar</button>
            </Button> : <></>}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h2>Seja muito bem vindo!</h2>
                    <h3>Para que página deseja ir?</h3>
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
                {children}
            </Dialog>
        </div>
    );
}

export { Modal }