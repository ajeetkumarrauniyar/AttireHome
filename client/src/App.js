import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main style={{minHeight:'83vh'}} className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
