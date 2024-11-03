/* eslint-disable no-unused-vars */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Cart } from "./pages/Cart";
import AddressPayment from "./pages/AddressPayment";

import { initMercadoPago } from "@mercadopago/sdk-react";
import { sendCartDataToBackend } from "../services/payment";
import OrderConfirmation from "./pages/OrderConfirmation";

const steps = [
  "Revisión del Carrito",
  "Dirección y Método de pago",
  "Confirmación del Pedido",
];


export default function StepperPay() {
  initMercadoPago("TEST-d98ac793-37db-40e9-b9f4-7eaac513331f", {
    locale: "es-AR",
  });
  const [preferenceId, setPreferenceId] = React.useState(null);
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = React.useState(dataUser.uid);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();
  
  const handleBuy = async ()=> {
    const id = await sendCartDataToBackend();
    console.log(id);
    if(id) {
        setPreferenceId(id);
    }
  }
  // Estados para verificar selección de dirección y método de pago
  const [isAddressSelected, setIsAddressSelected] = React.useState(false);
  const [addressSelect, setAddressSelect] = React.useState("");
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] =
    React.useState(false);
    const [methodPaySelect, setMethodPaySelect] = React.useState(localStorage.getItem('paymentMethod'));
    const [selectProducts, setSelectProducts] = React.useState(JSON.parse(localStorage.getItem('cart')));

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

  const handleMethodPay = (method) => {
    setIsPaymentMethodSelected(true);
    setMethodPaySelect(method);
    if (method === "MercadoPago" && !preferenceId) {
      handleBuy();
    }
  }

  const handleAddress = (address) => {
    setIsAddressSelected(true);
    setAddressSelect(address);

  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleGoToMenu = () => {
    navigate("/menu");
  };

  return (
    <Box sx={{ width: "100%", padding: "1rem" }}>
      <Button
        onClick={handleGoToMenu}
        sx={{ color: "#000", mb: 2, display: "flex", alignItems: "center" }}
      >
        <ArrowBackIcon sx={{ mr: 1 }} /> Volver al Menú
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
                      color: "#F89604",
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
          {activeStep === 0 && <Cart />}
          {activeStep === 1 && (
            <AddressPayment
              userId={userId}
              onAddressSelected={handleAddress}
              onPaymentMethodSelected={handleMethodPay}
            />
          )}
          {activeStep === 2 && methodPaySelect==="MercadoPago" && (
            <OrderConfirmation address={addressSelect} methodPaySelect={methodPaySelect} preferenceId={preferenceId} products={selectProducts}/>
          )}
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
            <Button
              onClick={handleNext}
              sx={{ color: "#000" }}
              // Desactiva el botón "Siguiente" en el paso 1 si no hay dirección y método de pago
              disabled={
                activeStep === 1 &&
                (!isAddressSelected || !isPaymentMethodSelected)
              }
            >
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
