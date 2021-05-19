import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Navbar/Pages/Services';
import Products from './components/Navbar/Pages/Products';
import ContactUs from './components/Navbar/Pages/ContactUs';
import SignUp from './components/Navbar/Pages/SignUp';
import Marketing from './components/Navbar/Pages/Marketing';
import Consulting from './components/Navbar/Pages/Consulting';
import Home from './components/Navbar/Pages/Home';
import AppCSS from './AppCSS';
export default function App() {
  return (
    <AppCSS>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/marketing' exact component={Marketing} />
          <Route path='/consulting' exact component={Consulting} />
        </Switch>
      </Router>
    </AppCSS>
  );
}
