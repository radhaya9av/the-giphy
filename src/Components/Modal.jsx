import React from 'react';
import { useTheme } from '../context/themeContext';

/*eslint-disable */

function Modal({setModal, giff, title, link, embed_url}) {
    const theme = useTheme()
    return (
        <ModalStyled theme={theme}>
            <div className="modal">
                <div className="modal-content">
                    <img src={giff} alt="" className='giff' />
                    <div className="text-content">
                        <h3>{title}</h3>
                        <div className="share-item share">
                            <a href={link} target={"_blank"}>
                                <i className="fa-solid fa-paper-plane"></i>
                                <span>Share</span>
                            </a>
                        </div>
                        <div className="share-item embed">
                            <a href={embed_url} target="_blank">
                                <i className="fa-solid fa-code"></i>
                                <span>Embed</span>
                            </a>
                        </div>
                        <div className="share-item giffy">
                            <a href={link} target="_blank" >
                                <i className="fa-solid fa-up-right-from-square"></i>
                                <span>Giffy</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={() => setModal(false)}></div>
        </ModalStyled>
    )
}

export default Modal