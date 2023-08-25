import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function PopperCard({ name, medicinDose, laboratory, description, cost, drugType, children }) {
    return (
        <PopupState
            variant="popper"
            popupId="demo-popup-popper"
        >
            {(popupState) => (
                <div>
                    <Button
                        style={{ margin: '0px', marginTop: '40px', padding: '0px', border: '0px' }}
                        {...bindToggle(popupState)}>
                        {children}
                    </Button>

                    <Popper {...bindPopper(popupState)}
                        transition
                        placement="right"
                    >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <Typography sx={{ p: 2 }}>
                                        O medicamento {name} - {medicinDose} do laboratório {laboratory} é um {drugType}

                                        {'\n\n' + description}
                                    </Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    )
}

export { PopperCard }