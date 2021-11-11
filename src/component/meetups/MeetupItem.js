import { useContext } from 'react'
import FavoriteContext from '../../store/favorites-context'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
function MeetupItem(props) {
    const favoriteCtx = useContext(FavoriteContext)
    const itemIsFavorite = favoriteCtx.isFavorite(props.id)
    const toggleFavorite = () => {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavorite}>{itemIsFavorite ? 'Remove Favorite' : 'Add Favorite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
