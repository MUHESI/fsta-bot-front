import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { CustomButton } from "./Button";

interface IDataProps {
  stepsLabel: string[];
  children: React.ReactNode;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleStep?: (id: number) => void;
  currentStep: number;
}

export default function CustomStepper({
  stepsLabel,
  children,
  handleNextStep,
  // handleStep,
  handlePreviousStep,
  currentStep,
}: IDataProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  React.useEffect(() => {
    setActiveStep(currentStep);
    setCompleted({ [currentStep]: true });
  }, [currentStep]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {stepsLabel.map((label, index) => (
          <Step
            style={{ color: "red" }}
            key={label}
            completed={completed[index]}
            className="text-main-color text-sm"
          >
            <StepButton color="info" style={{ color: "#5BDCF1" }}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          {children}
          <div className=" flex gap-4 justify-center items-center">
            <CustomButton
              onClick={handlePreviousStep}
              disabled={activeStep === 0 ? true : false}
              label="Précedent"
              className="rounded-full"
            />
            <div className="text-gray-400 text-sm">
              {`${activeStep + 1}/${stepsLabel.length}`}{" "}
            </div>

            {stepsLabel.length - 1 !== activeStep && (
              <CustomButton
                onClick={handleNextStep}
                disabled={stepsLabel.length - 1 == activeStep ? true : false}
                label="Suivant"
                className="bg-main-color text-white  rounded-full"
              />
            )}
          </div>
        </React.Fragment>
      </div>
    </Box>
  );
}
