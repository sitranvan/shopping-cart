import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Header from './layouts/components/Header';

import { publicRoutes } from './routes';
function App() {

  return (  
    <div className="App">
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return (
            <Route key={index} path={route.path} element={<Page />} />
          )
        })}
      </Routes>
      <ToastContainer
        position="top-left" theme='light' autoClose='1000'
        hideProgressBar={true} pauseOnHover={false}
      />
    </div>
  );
}

export default App;
