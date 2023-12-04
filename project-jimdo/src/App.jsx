import { useState } from 'react'
import './App.css'
import Navigation from '../public/Component/Navigation'
import Content from '../public/Component/content';
import Bluebar from '../public/Component/bluebar';
import Footer from '../public/Component/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Content />
      <Bluebar />
      <Footer />
    </div>
  );
};

export default App
