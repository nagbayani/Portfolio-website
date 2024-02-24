import React from "react";

function NoiseGradient(props) {
  const {
    angle,
    backgroundColor,
    gradientColor,
    overlayColor,
    blending,
    brightness,
    contrast,
  } = props;

  let src =
    "https://framerusercontent.com/images/BIDFYoNsJ2LPGX7kjhBw8Qrqcc.svg";

  const size = { width: "100%", height: "100%" };
  const inset = { position: "absolute", inset: 0 };

  return (
    <div
      style={{
        ...size,
        position: "relative",
        backgroundColor,
        isolation: "isolate",
      }}
    >
      <div
        style={{
          ...size,
          ...inset,
          background: `linear-gradient(${angle}deg, ${gradientColor}, transparent), url(${src})`,
          filter: `contrast(${contrast}%) brightness(${brightness}%)`,
          position: "absolute",
        }}
      />
      <div
        style={{
          ...size,
          ...inset,
          backgroundColor: overlayColor,
          mixBlendMode: blending,
          position: "absolute",
        }}
      />
    </div>
  );
}

NoiseGradient.defaultProps = {
  density: 1,
  backgroundColor: "#FB0",
  gradientColor: "#F30",
  overlayColor: "#FED",
  angle: 45,
  contrast: 500,
  brightness: 500,
};

export default NoiseGradient;
