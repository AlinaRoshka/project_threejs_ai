import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000",
          "#ffffff",
          "#931F1D",
          "#ED254E",
          "#0D1B1E",
          "#0D4B1E",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
     
    </div>
  );
};

export default ColorPicker;
