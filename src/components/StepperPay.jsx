import * as React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook para la navegación
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Importa el ícono de flecha
import { Cart } from "./pages/Cart";
import AddressPayment from "./pages/AddressPayment";
import { OrderConfirmation } from "./pages/OrderConfirmation";

const steps = [
  "Revisión del Carrito",
  "Dirección y Método de pago",
  "Confirmación del Pedido",
];

export default function StepperPay() {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = React.useState(dataUser.user.uid);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate(); // Inicializa el hook para navegar

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleGoToMenu = () => {
    navigate("/menu"); // Cambia '/menu' por la ruta de tu menú
  };

  return (
    <Box sx={{ width: "100%", padding: "1rem" }}>
      {/* Botón de flecha para ir al menú */}
      <Button
        onClick={handleGoToMenu}
        sx={{ color: "#000", mb: 2, display: "flex", alignItems: "center" }}
      >
        <ArrowBackIcon sx={{ mr: 1 }} />{" "}
        {/* Flecha que apunta a la izquierda */}
        Volver al Menú
      </Button>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {
            sx: {
              color:
                activeStep === index || activeStep > index
                  ? "#F89604"
                  : "inherit",
            },
          };
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Opcional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                StepIconProps={{
                  sx: {
                    color:
                      activeStep === index || activeStep > index
                        ? "#F89604"
                        : "inherit",
                    "&.Mui-active, &.Mui-completed": {
                      color: "#F89604", // Color naranja para las bolitas activas y completadas
                    },
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Todos los pasos completados - proceso finalizado.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset} sx={{ color: "#000" }}>
              Reiniciar
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Renderizar el componente correspondiente al paso actual */}
          {activeStep === 0 && <Cart />}
          {activeStep === 1 && <AddressPayment userId={userId} />}
          {activeStep === 2 && <OrderConfirmation />}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atrás
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ color: "#000" }}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
