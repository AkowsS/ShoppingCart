import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const ExternDiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const Container = styled("div")({
  margin: "15px",
  width: "424px",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  p: {
    marginRight: "15px",
  },
  a:{
    textDecoration: "none",
  },
});

export const ProductDescription = styled("p")({
  maxHeight: "34px",
  marginTop: "24px",
  marginBottom: "24px",
  color: "#272727",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "17px",
  marginLeft: "15px",
});

export const ProductPrice = styled("p")({
  marginBottom: "24px",
  marginTop: "0px",
  color: "#000000",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "29px",
  marginLeft: "15px",
});

export const ProductImage = styled("img")({
  marginTop: "15px",
  maxWidth: "330px",
  maxHeight: "320px",
});

export const AddtoCar = styled("button")({
  marginTop: "18px",
  width: "394px",
  height: "51px",
  gap: "8px",
  backgroundColor: "#89D963",
  borderRadius: "5px",
  justifyContent: "center",
  display: "flex",
  p: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19px",
    alignItems: "center",
  },
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#89D9A3",
    width: "400px",
    height: "55px",
  },
});

export const ProductTitle = styled("p")({
  maxHeight: "29px",
  marginTop: "34px",
  marginBottom: "0px",
  color: "#000000",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "29px",
  marginLeft: "15px",
});

export const CentralizeItens = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img:{
    marginTop: "15px",
    width: "330px",
    height: "320px",
  },
});