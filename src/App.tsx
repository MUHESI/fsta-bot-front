import React from "react";
import Layout from "./components/navigation/Layout";
import { ToastContainer } from "react-toastify";
import RangerSlider from "@/components/core/RangerSlider";
import { Grid } from "@mui/material";
import SellectOrganization from "./pages/SelectOrganization";

function App() {
  return (
    <div style={{}} className="border p-1">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="border rounded-lg">
            <div className="" style={{ width: "100%", height: "97vh" }}>
              <SellectOrganization />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className="border rounded-lg p-1">
            <iframe
              src="https://web.powerva.microsoft.com/environments/Default-84c31ca0-ac3b-4eae-ad11-519d80233e6f/bots/cr5be_botTestdWGg_r/webchat?__version__=2"
              // frameborder={0}
              style={{ width: "100%", height: "95vh" }}
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
