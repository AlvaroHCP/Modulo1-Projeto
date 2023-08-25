import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';


import Backdrop from '@mui/material/Backdrop';


import { useState } from 'react';


function BackDropCard({ name, medicinDose, laboratory, description, cost, drugType, children }) {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>

            <Button onClick={handleOpen}>{children}</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div
                    style={{ width: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {children}

                    <Paper
                        sx={{ backgroundColor: 'lightgreen', boxShadow: '20' }}
                    >
                        <Typography
                            sx={{ p: 2 }}
                            elevation={0}
                        >
                            O medicamento {name} - {medicinDose
                            } do laboratório {laboratory
                            } é um {drugType == 'Medicamento Controlado' ?
                                <u><b>{drugType}</b></u> :
                                <>{drugType}</>}

                        </Typography>
                        <Typography
                            sx={{ p: 2 }}

                        >
                            {description}
                        </Typography>
                    </Paper>
                </div>

            </Backdrop>
        </>
    )
}

export { BackDropCard }