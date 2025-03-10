import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';



export function WorkItems({ item }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalWidth, setModalWidth] = useState(window.innerWidth < 900 ? '90%' : '50%')

    // Update modal width on window resize
    useEffect(() => {
        const handleResize = () => {
            setModalWidth(window.innerWidth < 900 ? '90%' : '50%')
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: modalWidth,
        bgcolor: 'var(--container-color)',
        border: '2px solid var(--title-color)',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className="work__card">
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <button className="work__button details-button" onClick={handleOpen}>
                Details <i className="bx bx-right-arrow-alt work__button-icon details-icon"></i>
            </button>


            <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
                View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title modal-title" variant="h6" component="h2" sx={{ color: 'var(--title-color)' }}>
                            {item.fullTitle}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2, color: 'var(--text-color)' }}>
                            <b>Description: </b>{item.description}
                        </Typography>
                        <Typography id="transition-modal-description modal-tech" sx={{ mt: 2, color: 'var(--text-color)' }}>
                            <b>Technologies used: </b>{item.tech}
                        </Typography>

                        {/* <Button className="modal-button" variant="contained" color="error" onClick={handleClose
                        } sx={{mt:2, fontSize: '10px'}}><i className="uil uil-times close-icon"></i></Button> */}
                    </Box>

                </Fade>
            </Modal>

        </div>
    )
}