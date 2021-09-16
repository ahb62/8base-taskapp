import React, { useCallback } from "react";
import { AppProvider } from "8base-react-sdk";
import { BrowserRouter } from "react-router-dom";

import { WORKSPACE_ENDPOINT } from "./shared/constants";
import { authClient } from "./shared/auth/index";
import { Routes } from "./routes";

import 'bootstrap/dist/css/bootstrap.min.css';

export const Application = () => {
  const onRequestSuccess = useCallback(({ operation }) => {
    const message = operation.getContext();
    if (message) 
    {
      console.log(`your message of the request auth is:`);
      console.log(message);
    }
  }, []);

  const onRequestError = useCallback(({ graphQLErrors }) => {
    const hasGraphQLErrors =
      Array.isArray(graphQLErrors) && graphQLErrors.length > 0;

    if (hasGraphQLErrors) {
      graphQLErrors.forEach((error) => {
        console.error(`your error of the request auth is: ${error.message}`);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <AppProvider
        uri={WORKSPACE_ENDPOINT}
        authClient={authClient}
        onRequestError={onRequestError}
        onRequestSuccess={onRequestSuccess}
      >
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};
