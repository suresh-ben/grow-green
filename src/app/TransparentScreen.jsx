"use client";
import React from "react";

export default function TransparentScreen({ paddingClass = "p-6", maxwidthClass = "w-[14rem]", children }) {
    return (
        <div className={`relative border-white border ${paddingClass} ${maxwidthClass} text-white rounded-4xl`}
          style={{
            backgroundColor: "rgba(255,255,255,0.25)"
          }}
        >{children}</div>
    );
}
