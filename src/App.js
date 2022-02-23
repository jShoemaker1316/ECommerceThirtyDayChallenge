import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//in case you struggling with react-router-dom, they had updates, so you need to do it like that :

{/* <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/productlist' element={<ProductList />}/>
        </Routes>
      </BrowserRouter>
    </div> */}