import React from 'react'
import { useGlobal } from '../context/global'
import GiffItem from './GiffItem'
import Masonry from 'react-masonry-css'
import { useTheme } from '../context/themeContext'
import Loader from './Loader'

const list = <i className="fa-solid fa-list"></i>

function Search() {

    const {searchResults, loading} = useGlobal()
    const theme = useTheme()

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <SearchStyled theme={theme}>
            <h2>{list}Search Results</h2>
            {loading && <Loader />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    searchResults.map((giff) => {
                        return <GiffItem key={giff.id} {...giff} giffItem={giff} />
                    })
                }
            </Masonry>
        </SearchStyled>
    )
}


export default Search