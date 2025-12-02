import React from "react";

interface FadedMeshWrapperProps {
  children: React.ReactNode;
  fadeTop?: boolean;
  fadeBottom?: boolean;
  fadeLeft?: boolean;
  fadeRight?: boolean;
  fadeDistance?: string; // e.g. "100px", "20%", "5rem"
  className?: string;
}

export const FadeMask: React.FC<FadedMeshWrapperProps> = ({
  children,
  fadeTop = false,
  fadeBottom = false,
  fadeLeft = false,
  fadeRight = false,
  fadeDistance = "100px",
  className = "absolute inset-0 w-full h-full",
}) => {
  // We use CSS Mask Image to create transparency gradients.
  // We construct two linear gradients (one vertical, one horizontal)
  // and composite them using 'source-in' (intersect).

  // Vertical Mask: Black (visible) in middle, Transparent at top/bottom if requested
  const maskTop = fadeTop
    ? `transparent, black ${fadeDistance}`
    : "black, black";
  const maskBottom = fadeBottom
    ? `black calc(100% - ${fadeDistance}), transparent`
    : "black, black";
  const verticalGradient = `linear-gradient(to bottom, ${maskTop}, ${maskBottom})`;

  // Horizontal Mask: Black (visible) in middle, Transparent at left/right if requested
  const maskLeft = fadeLeft
    ? `transparent, black ${fadeDistance}`
    : "black, black";
  const maskRight = fadeRight
    ? `black calc(100% - ${fadeDistance}), transparent`
    : "black, black";
  const horizontalGradient = `linear-gradient(to right, ${maskLeft}, ${maskRight})`;

  const style: React.CSSProperties = {
    // Standard property
    maskImage: `${verticalGradient}, ${horizontalGradient}`,
    maskComposite: "intersect", // Only where both are opaque is it visible

    // Webkit prefix for Chrome/Safari compatibility
    WebkitMaskImage: `${verticalGradient}, ${horizontalGradient}`,
    WebkitMaskComposite: "source-in", // 'source-in' is roughly equivalent to 'intersect' for webkit in this context

    pointerEvents: "none", // Ensure clicks pass through the wrapper itself
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
