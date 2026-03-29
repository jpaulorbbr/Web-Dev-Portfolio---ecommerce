import { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hello/')
      .then(res => setData(res.data.message))
      .catch(err => console.error(err))
  }, []);

  return <h1>{data || "Loading..."}</h1>;
}

export default App
