
import Footer from "./Components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
    <Router>
      <Switch>
    
      <Route  exact path="/">
    <Home/>
    </Route>

    </Switch>
        </Router>
         
      
          <Footer />
    </>
  );
}

export default App;
