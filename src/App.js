import React, { Component } from 'react';
import './App.css';
import { getAllStarships } from '../src/services/sw-api'
import StarshipPage from './Pages/StarshipPage/StarshipPage'
import StarshipHome from './Pages/StarshipHome'
import { Link, Route, Switch } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>404! We couldn't find that!</h1>
      <Link to='/'>Go Back Home</Link>
    </>
  )
}
class App extends Component {
  state = {
    starShipData: []
  }


  async componentDidMount() {
    const { results } = await getAllStarships();
    this.setState({
      starShipData: results,
    })
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div><h1>STAR WARS STARSHIPS</h1>
          </div>
        </header>
        <Switch>
          <Route exact path='/' render={(props) => (
            <StarshipHome
              {...props}
              starShipData={this.state.starShipData}
            />)} />
          <Route exact path='/starships/:id' component={StarshipPage} />
          <NotFound />
        </Switch>
      </div >
    );
  }

}

export default App;
