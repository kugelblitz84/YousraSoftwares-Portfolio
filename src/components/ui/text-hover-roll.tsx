"use client";

import React from "react";

interface TextHoverRollProps {
  text: string;
  className?: string;
  subTextClassName?: string;
}

export function TextHoverRoll({
  text,
  className = "",
  subTextClassName = "",
}: TextHoverRollProps) {
  return (
    <span className={`text-roll-wrapper ${className}`}>
      <span className="text-roll-inner">
        <span className="block">
          {text}
        </span>
        <span
          className={`block ${subTextClassName}`}
          aria-hidden="true"
        >
          {text}
        </span>
      </span>
    </span>
  );
}
