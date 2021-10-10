/* eslint-disable @typescript-eslint/naming-convention */
import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";

export const Carousel = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">Nature</div>
        <div className="keen-slider__slide number-slide2">Water</div>
        <div className="keen-slider__slide number-slide3">Flower</div>
        <div className="keen-slider__slide number-slide4">Architecture</div>
        <div className="keen-slider__slide number-slide5">Chemistry</div>
        <div className="keen-slider__slide number-slide6">Winter</div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 50vh;
          max-height: 100vh;
          border-radius: 5px;
        }
        .number-slide1 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?nature");
        }
        .number-slide2 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?water");
        }
        .number-slide3 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?flower");
        }
        .number-slide4 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?architecture");
        }
        .number-slide5 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?chemistry");
        }
        .number-slide6 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x500/?winter");
        }
      `}</style>
    </>
  );
};
