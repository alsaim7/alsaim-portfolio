import Modal from "react-modal"
import { useState, useEffect } from "react"
import Button from '@mui/material/Button';

Modal.setAppElement('#root')
export function WorkItems({ item }) {
    const [modalOpen, setModalOpen] = useState(false)

    const [modalWidth, setModalWidth] = useState(window.innerWidth < 600 ? '80%' : '50%')

    // Update modal width on window resize
    useEffect(() => {
        const handleResize = () => {
            setModalWidth(window.innerWidth < 600 ? '80%' : '50%')
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <div className="work__card">
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <button className="work__button details-button" onClick={() => setModalOpen(true)}>
                Details <i className="bx bx-right-arrow-alt work__button-icon details-icon"></i>
            </button>


            <a href={item.link} className="work__button" target="_blank" rel="noopener noreferrer">
                View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>


            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                style={{
                    content: {
                        width: modalWidth,
                        height: 'fit-content',
                        margin: 'auto',
                        borderRadius: '10px',
                        padding: '30px',
                        backgroundColor: 'var(--container-color)',
                        overflowY: 'hidden',
                    },
                    overlay: {
                        background: 'rgba(0,0,0,0.5)'
                    }
                }}
            >
                <div className="modal-content">
                    <div>
                        <h3 className="modal-title">{item.fullTitle}</h3>
                        <p className="modal-des"><b>Description: </b>{item.description}</p>
                        <p className="modal-tech"><b>Technologies used: </b>{item.tech}</p>
                    </div>

                    <Button className="modal-button" variant="contained" color="error" onClick={(() => {
                        setModalOpen(false)
                    })}><i className="uil uil-times"></i></Button>
                </div>
            </Modal>

        </div>
    )
}