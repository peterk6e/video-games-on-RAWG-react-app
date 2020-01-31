import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Videogame from './videogame'
import Page404 from './404'
import CookieBar from './cookieBar'
import Header from './header'
import Footer from './footer'
import Homepage from './homepage'

class App extends Component {
  render() {
    console.log('gh-pages iteration no.1')
    return (
      <div className='App'>
        <CookieBar />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={`${process.env.PUBLIC_URL}/videogame/:id`} component={Videogame} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App
