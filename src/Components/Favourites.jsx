import React from 'react'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

function Favourites({rendered}) {

    const {favourites, loading} = useGlobal()
    const theme = useTheme()

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <FavouritesStyled theme={theme}>
            <h2>{trend}Favourites</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                
                {
                    favourites.map((giff) => {
                        return <GiffItem key={giff.id} rendered={rendered} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </FavouritesStyled>
    )
}

export default Favourites