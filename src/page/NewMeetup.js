import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../component/meetups/NewMeetupForm'
function NewMeetUp() {
    const history = useHistory()
    function addMeetupHandler(meetupData) {
        console.log(meetupData)
        fetch('https://react-f2d79-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            history.replace('/')
        })
    }
    return (
        <section>
            <h1>NewMeetUp</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetUp
