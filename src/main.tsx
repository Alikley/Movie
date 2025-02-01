import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from "react-router";
import router from "./routes";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./them";
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
