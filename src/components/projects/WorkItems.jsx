import { useState, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

export function WorkItems({ item }) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [walkthroughOpen, setWalkthroughOpen] = useState(false);
    const [modalWidth, setModalWidth] = useState(window.innerWidth < 900 ? '90%' : '60%');

    useEffect(() => {
        const resize = () =>
            setModalWidth(window.innerWidth < 900 ? '90%' : '60%');
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

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
        maxHeight: '90vh',
        overflowY: 'auto'
    };

    return (
        <div className={`work__card class${item.id}`}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            {/* DETAILS */}
            <button className="work__button details-button" onClick={() => setDetailsOpen(true)}>
                Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </button>

            {/* CONDITIONAL BUTTON */}
            {item.type === 'internal' ? (
                <button className="work__button" onClick={() => setWalkthroughOpen(true)}>
                    Project Walkthrough <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </button>
            ) : (
                <button>

                <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
                    View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                </button>
            )}

            {/* DETAILS MODAL */}
            <Modal open={detailsOpen} onClose={() => setDetailsOpen(false)} closeAfterTransition slots={{ backdrop: Backdrop }}>
                <Fade in={detailsOpen}>
                    <Box sx={style}>
                        <Typography variant="h6" sx={{ color: 'var(--title-color)' }}>
                            {item.fullTitle}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                whiteSpace: 'pre-line',
                                fontFamily: 'inherit'
                            }}
                        >
                            <b>Description:</b>{'\n'}
                            {item.description}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <b>Tech Stack:</b> {item.tech}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

            {/* WALKTHROUGH MODAL */}
            <Modal open={walkthroughOpen} onClose={() => setWalkthroughOpen(false)} closeAfterTransition slots={{ backdrop: Backdrop }}>
                <Fade in={walkthroughOpen}>
                    <Box sx={style}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Project Walkthrough
                        </Typography>

                        {item.screenshots?.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                style={{
                                    width: '100%',
                                    marginBottom: '1rem',
                                    borderRadius: '8px'
                                }}
                            />
                        ))}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
