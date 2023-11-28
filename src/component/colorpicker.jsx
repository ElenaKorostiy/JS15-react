import React, { forwardRef } from "react";

export const ColorPicker = forwardRef(({ type }, ref) => {
    return (
        <input
            type="color"
            ref={ref}
        />
       
    );
});