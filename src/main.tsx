import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { ContextProvider } from "./contexts/contextPorvider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/authContext.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <ContextProvider>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </ContextProvider>
    </RecoilRoot>
  </BrowserRouter>
);
