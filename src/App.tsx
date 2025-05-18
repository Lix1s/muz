import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './views/login/Login';
import Home from './views/Home';
import Registration from './views/registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { CatalogPage } from './views/catalog/index';
import Cart from './components/cart/Cart';

import Context from './widgets/context/ui/context';
import Tovar from './views/Tovar/Tovar';
import { AboutPage } from './views/aboutUs/index';
import Admin from './views/admin/Admin';
// import ProductList from './components/ProductList/ProductList';
// import ProductForm from './components/ProductForm/ProductForm';
import CheckOut from '#/views/CheckOut/CheckOut';
import Profile from '#/views/profile/Profile';
import New from '#/views/new/New';
import Tuner from '#/views/tuner/Tuner';
import { Header } from '#/widgets/header';
import { Footer } from '#/widgets/footer';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tovar/:title" element={<Tovar />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id/edit" element={<ProductForm />} /> */}
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          <Route path="/tuner" element={<Tuner />} />
        </Routes>
      </Context>
      <Footer />
    </>
  );
}

export default App;
