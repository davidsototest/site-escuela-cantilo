import React from "react";
import EmailsComponent from "../components/Admin/EmailsComponent";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  // Define props here
}

const EmailsLayout: React.FC<Props> = (Props) => {
  return (
    <Grid container display="flex" justifyContent="center">
      <Grid xs={10} md={6}>
        <EmailsComponent />
      </Grid>
    </Grid>
  );
};

export default EmailsLayout;
