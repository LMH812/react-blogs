import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
// import NewMeetUp from './page/NewMeetup'
// import Favorites from './page/Favorites'
// import AllMeetups from './page/AllMeetups'
import Layout from './component/layout/Layout'

const NewMeetUp = React.lazy(() => import('./page/NewMeetup'))
const Favorites = React.lazy(() => import('./page/Favorites'))
const AllMeetups = React.lazy(() => import('./page/AllMeetups'))

function App() {
    return (
        <Layout>
            <Suspense fallback={<p>loading...</p>}>
                <Switch>
                    <Route exact path="/">
                        <AllMeetups />
                    </Route>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route path="/new-meetup">
                        <NewMeetUp />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App
