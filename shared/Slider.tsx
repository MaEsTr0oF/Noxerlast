"use client";
import React from "react";

import "@/styles/shared/slider.css";

interface SliderProps {
  children: any;
  height: string;
  between?: string;
}

const Slider: React.FC<SliderProps> = ({
  children,
  height,
  between = "10px",
}) => {
  return (
    <div style={{ height: height }} className="slider-container">
      <div style={{ gap: between }} className="slider-content">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="slider-item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
