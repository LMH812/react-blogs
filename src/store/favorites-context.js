import { createContext, useState } from 'react'
const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {},
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])
    function addFavoritesHandler(meetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(meetup)
        })
    }
    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => {
                return meetup.id !== meetupId
            })
        })
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: itemIsFavoriteHandler,
    }

    return <FavoriteContext.Provider value={context}>{props.children}</FavoriteContext.Provider>
}

export default FavoriteContext
