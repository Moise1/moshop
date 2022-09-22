import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";
import { Home } from "./screens/Home";
import { Product } from "./screens/Product";
import { Cart } from "./screens/Cart";
import { Login } from "./screens/Login";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login/>} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/cart/:id" element={<Cart/>} />
              {/* <Route path="/admin/userlist" component={UserListScreen} />
              <Route path="/admin/user/:id/edit" component={UserEditScreen} />

              <Route path="/admin/productlist" component={ProductListScreen} />
              <Route path="/admin/product/:id/edit" component={ProductEditScreen}/>
              <Route path="/admin/orderlist" component={OrderListScreen} /> */}
              
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};
