import { useContext } from 'react'
import FavoriteContext from '../store/favorites-context'
import MeetupList from '../component/meetups/MeetupList'
function Favorites() {
    const favoriteCtx = useContext(FavoriteContext)

    let content
    if (favoriteCtx.totalFavorites === 0) {
        content = <p>No Favorite Meetups!!!</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }
    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
    )
}

export default Favorites
