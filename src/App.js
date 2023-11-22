
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImgDetail from "./ImgDetail";
import NotFound from "./NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Hero />
                <Gallery />
              </Route>
              <Route path="/add">
                <Create />
              </Route>
              <Route path="/imgs/:id">
                <ImgDetail />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
