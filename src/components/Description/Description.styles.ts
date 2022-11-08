import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
    margin:"177px 91px 94px 91px",
    minHeight:"calc(100vh - 461px)",
});

export const ExternDiv = styled("div")({
  //height:"350px",
  width: "70vw",
  display:"flex",
  img: {
    marginRight:"100px",
    marginTop: "15px",
    minWidth: "330px",
    height: "320px",
  },
});

export const TextInformations = styled("div")({
  //height:"300px",
  width: "100%",
});

export const ItemTitle = styled("h1")({
  fontSize: "30px",
});

export const ItemDescription = styled("p")({
  fontSize: "30px",
});

export const CentralizeItens = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const AddtoCar = styled("button")({
  width: "394px",
  height: "51px",
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

export const ProductPrice = styled("p")({
  display:"flex",
  alignItems:"center",
  textAlign:"center",
  marginTop: "100px",
  color: "#000000",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "29px",
});
