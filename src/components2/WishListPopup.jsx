import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const WishListPopup = () => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success" color="info" className="bg-red-600">
          Added to wish List
        </Alert>
      </Stack>
    </div>
  );
};

export default WishListPopup;
