import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Container from './layouts/components/Container';
import Footer from './layouts/components/Footer';
import Header from './layouts/components/Header';

import { publicRoutes } from './routes';
function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route key={index} path={route.path} element={<Page />} />
            )
          })}
        </Routes>
      </Container>
      <ToastContainer
        style={{ zIndex: 99999999 }}
        position="top-left" theme='light' autoClose='1000'
        hideProgressBar={true} pauseOnHover={false}
      />
      <Footer />
    </div>
  );
}

export default App;
