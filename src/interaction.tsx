import type React from "react";
import { createContext, useContext, useMemo } from "react";

import type { Stepper } from "@okcontract/sdk";

import { useVerified } from "./core";
import { useInstance } from "./instance";

const StepperContext = createContext<Stepper | null>(null);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("StepperContext is required");
  }
  return context;
};

export const OKInteraction: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id: interactionID, children }) => {
  const verified = useVerified();
  const instance = useInstance();
  const stepper = useMemo(() => {
    return verified && instance ? instance.stepper(interactionID) : null;
  }, [instance, interactionID, verified]);

  return (
    <StepperContext.Provider value={stepper}>
      {children}
    </StepperContext.Provider>
  );
};
