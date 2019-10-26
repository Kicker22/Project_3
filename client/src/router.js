import React from 'react'
import Meetups from './Pages/meetups';


export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={home}/>
    <Route path="/meetups" component={Meetups}/>
  </Route>
</Router>