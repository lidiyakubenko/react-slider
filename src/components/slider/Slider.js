import React, {useEffect, useState} from "react";
import './css/slider.css'
import Arrows from "./Arrows";

function Slider({items}) {
  const [indexMap, setIndexMap] = useState({
    curr: null,
    prev: null,
    next: null
  })

  useEffect(() => {
    setIndices(0)
  }, [items])

  const computeNext = currIndex => {
    const isLast = currIndex === items.length - 1
    return isLast ? 0 : currIndex + 1
  }

  const computePrev = currIndex => {
    const isFirst = currIndex === 0
    return isFirst ? items.length - 1 : currIndex - 1
  }

  const onClickNext = () => {
    const currentIndex = computeNext(indexMap.curr)
    setIndices(currentIndex)
  }
  const onClickPrev = () => {
    const currentIndex = computePrev(indexMap.curr)
    setIndices(currentIndex)
  }

  const setIndices = (curr) => {
    setIndexMap({
      curr: curr,
      prev: computePrev(curr),
      next: computeNext(curr)
    })
  }

  return indexMap.curr !== null ? (
    <div className="slider">
      <div className="slider-images">
        <img className="slider-image slider-prev-image" src={require(`./images/${items[indexMap.prev]}`)} alt=""
             onClick={onClickPrev}/>
        <img className="slider-image slider-curr-image" src={require(`./images/${items[indexMap.curr]}`)} alt=""/>
        <img className="slider-image slider-next-image" src={require(`./images/${items[indexMap.next]}`)} alt=""
             onClick={onClickNext}/>
      </div>
      <Arrows onClickNext={onClickNext} onClickPrev={onClickPrev}/>
    </div>
  ) : null
}

export default Slider;
