import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Banner />
        <Switch>
          <Route strict exact path='/' component={TodoPage} />
          <Route strict exact path='/followers' component={FollowersPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
