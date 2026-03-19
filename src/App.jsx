import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Glossary from './components/Glossary';
import Others from './components/Others';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
