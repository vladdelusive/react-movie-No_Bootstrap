import React from 'react'
import './Search.css'
import SearchItem from "./SearchItems/SearchItem";
import {Link} from "react-router-dom";
import NoOneFound from "./NoOneFound/NoOneFound";

export default function Search({value, searchResultActors, searchResultMovies, setShowSearchedItems}) {

    if (!searchResultMovies || !searchResultActors) return null
    const searchedItemsMovies = [];
    const toM = searchResultMovies.length > 2 ? 2 : searchResultMovies.length
    for (let i = 0; i < toM; i++) {
        searchedItemsMovies.push(
            <SearchItem
                setShowSearchedItems={setShowSearchedItems}
                key={searchResultMovies[i].id}
                title={searchResultMovies[i].title}
                image={searchResultMovies[i].poster_path}
                id={searchResultMovies[i].id}
                typeItem="movie"
            />)
    }

    const searchedItemsActors = [];
    const toA = searchResultActors.length > 2 ? 2 : searchResultActors.length
    for (let i = 0; i < toA; i++) {
        searchedItemsActors.push(
            <SearchItem
                setShowSearchedItems={setShowSearchedItems}
                key={searchResultActors[i].id}
                title={searchResultActors[i].name}
                image={searchResultActors[i].profile_path}
                id={searchResultActors[i].id}
                typeItem="actor"
            />)
    }

    const categoriesCount =
        !!searchedItemsMovies.length + !!searchedItemsActors.length
    if (!categoriesCount) return <NoOneFound/>
    const pixels =
        (65 * (searchedItemsMovies.length + searchedItemsActors.length))
        + (22 * categoriesCount) + 35
    // (h.card*n.card)+(categ*n.categ)+h.more
    return (
        <div className="input-block__items" style={{height: pixels}}>
            {
                searchedItemsMovies.length ?
                    <div className="category-search">
                        <div className="category category__movies">Movies</div>
                        {searchedItemsMovies}
                    </div>
                    : null
            }
            {searchedItemsActors.length ?
                <div className="category-search">
                    <div className="category category__actors">Actors</div>
                    {searchedItemsActors}
                </div>
                : null
            }
            <Link className="input-block__link" to={`/search?query=${value}`}
                  onClick={() => setShowSearchedItems(false)}>More...</Link>

        </div>
    )
}