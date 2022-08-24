import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";
import { Home } from "./screens/Home";
import { Product } from './screens/Product';


export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/product/:id" element={<Product/>}/>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};
