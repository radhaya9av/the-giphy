import React, { useState } from 'react'
import { useGlobal } from '../context/global'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'
import Modal from './Modal'

function GiffItem({
    id, 
    title, 
    embed_url, 
    rendered,
    url: link, 
    images: {original: {url}}}) {

    const {loading,  saveToFavourites, removeFromLocalStorage } = useGlobal()
    const theme = useTheme()

    //state
    const [modal, setModal] = useState(false)

    return (
        <GiffStyled theme={theme}>
            {modal && <Modal title={title} giff={url} link={link} embed_url={embed_url} setModal={setModal} />}
            {
            loading ? <Loader /> :
            <div className="gif" onDoubleClick={() => {
                setModal(true)
            }}>
                <img src={url} alt={title} />
                <div className="love" onClick={() => {
                    if(rendered === 'liked'){
                        removeFromLocalStorage(
                            {
                                id,
                                title,
                                url: link,
                                images: {
                                    original:{url}
                                }
                            }
                        )
                    }else{
                        saveToFavourites({
                            id,
                            title,
                            url: link,
                            images: {
                                original:{url}
                            }
                        })
                    }
                    
                }}>
                    <i className={rendered === 'liked' ? 'fa-solid fa-x': 'fa-solid fa-heart'}></i>
                </div>
            </div>
            }
        </GiffStyled>
    )
}

export default GiffItem