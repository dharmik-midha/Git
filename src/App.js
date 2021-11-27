import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About'
import Navabar from './components/navabar'
import SingleUser from './components/SingleUser'
import AboutUser from './components/aboutUser'

const App = () => {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {console.log(process.env.PUBLIC_URL)}
      <Navabar title="GitHub" />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/singleuser'>
          <SingleUser />
        </Route>
        <Route exact path='/aboutuser/:user' render={props =>
          <AboutUser {...props}  />
        } >
        </Route>
      </Switch>
    </Router>
  )
}

export default App

