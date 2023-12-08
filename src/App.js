import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import Cart from './components/Cart'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
)
export default App
