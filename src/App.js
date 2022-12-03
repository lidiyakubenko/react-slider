import React, {useEffect, useState} from "react";
import './App.css';
import Slider from './components/slider/Slider'
import getImages from "./components/slider/utils/getImages";

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      const images = await getImages()
      setImages(images)
    }

    fetchMyAPI()
  }, [])

  return (
    <div className="App">
      <h3>Slider</h3>
      {images.length > 0 ? <Slider items={images}/> : null}
    </div>
  );
}

export default App;
