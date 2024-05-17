import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

// jsx to get the components of the app
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
