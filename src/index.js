import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./App";
import "./assets/style/global.scss";
import "./assets/style/header.scss";
import "./assets/style/footer.scss";
import {I18nextProvider} from "react-i18next";
import store from "./reduxToolkit/store";
import {Provider} from "react-redux";
import i18n from "./Services/in18";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
    <CookiesProvider>
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <Provider store={store}>
                <ToastContainer />
                <Routes/>
            </Provider>
        </Suspense>
    </I18nextProvider>
    </CookiesProvider>
    </ErrorBoundary>
);
