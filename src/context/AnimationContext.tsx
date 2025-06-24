import React, { createContext, useContext, useState } from "react";

type AnimationContextType = {
  hasSeenAnimation: boolean;
  setHasSeenAnimation: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasSeenAnimation, setHasSeenAnimation] = useState(false);

  return (
    <AnimationContext.Provider
      value={{ hasSeenAnimation, setHasSeenAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
