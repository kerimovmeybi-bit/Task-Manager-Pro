import React from "react";
// нужен для JSX и StrictMode

import ReactDOM from "react-dom/client";
// новый API (createRoot) — правильно ✔️

import { Provider } from "react-redux";
// подключаем Redux к приложению

import { store } from "@/app/store";
// твой store

import App from "./App";
// корневой компонент

import { BrowserRouter } from "react-router-dom";
// роутинг


ReactDOM.createRoot(document.getElementById("root")!).render(
  //  ! — non-null assertion (говорим TS "элемент точно есть")

  <React.StrictMode>
    {/* помогает находить проблемы в dev */}

    <Provider store={store}>
      {/* даёт доступ к Redux во всём приложении */}

      <BrowserRouter>
        {/* включает маршрутизацию */}

        <App />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);