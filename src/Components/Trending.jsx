import React from 'react'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

function Trending() {

    const {trending, loading} = useGlobal()
    const theme = useTheme()

    console.log(trending)

    const breakpointColumnsObj = {
        default: 4,
        1400: 3,
        977: 2,
        500: 1
    };

    return (
        <TrendingStyled theme={theme}>
            <h2>{trend}Trending</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                
                {
                    trending.map((giff) => {
                        return <GiffItem key={giff.id} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </TrendingStyled>
    )
}

export default Trending