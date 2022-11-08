import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  position:"fixed",
  top:"0",
  width: "100%",
  height: "100px",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});
export const DivExtern = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginLeft:"118px",
  marginRight:"118px",
});
export const DivOtions = styled("div")({
  width: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  a: {
    textDecoration: "none",
    p:{
      color: "#000000",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight:"19px",
      ":hover":{
        fontSize: "26px",
      },
    },
  },
});

export const CartBox = styled("div")({
  a:{
    display: "flex",
    alignItems: "center",
  },
  p:{
    marginLeft: "15px !important",
    fontSize: "24.5px !important",
    lineHeight: "30px !important",
    color:"#C71D1D !important"
  }
});