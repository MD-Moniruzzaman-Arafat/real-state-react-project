import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Loder from './components/Loader/Loder';
import Navbar from './components/Navbar/Navbar';
import useAuth from './hooks/useAuth';

function App() {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
