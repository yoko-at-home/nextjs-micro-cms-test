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
        <div className="keen-slider__slide number-slide1"></div>
        <div className="keen-slider__slide number-slide2"></div>
        <div className="keen-slider__slide number-slide3"></div>
        <div className="keen-slider__slide number-slide4"></div>
        <div className="keen-slider__slide number-slide5"></div>
        <div className="keen-slider__slide number-slide6"></div>
        <div className="keen-slider__slide number-slide7"></div>
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
          height: 100vh;
          max-height: 100vh;
          border-radius: 5px;
        }
        .number-slide1 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?cats");
        }
        .number-slide2 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?spring,maincoon");
        }
        .number-slide3 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?maincoon,cat");
        }
        .number-slide4 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?winter,cats");
        }
        .number-slide5 {
          background: top/cover no-repeat url("https://source.unsplash.com/500x800/?cats,maincoon");
        }
        .number-slide6 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?kitten");
        }
        .number-slide7 {
          background: center/cover no-repeat url("https://source.unsplash.com/500x800/?autumn");
        }
      `}</style>
    </>
  );
};
