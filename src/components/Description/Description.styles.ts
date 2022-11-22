import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Container = styled("div")({
    margin: "177px 91px 94px 91px",
    minHeight: "calc(100vh - 461px)",
});

export const ExternDiv = styled("div")(({ theme }) => ({
  //height:"350px",
  margin:"auto",
  width: "70vw",
  display: "flex",
  flexDirection:"column",
  justifyContent:"center",
  img: {
    margin:"15px auto 0 auto",
    minWidth: "330px",
    height: "320px",
  },
  [theme.breakpoints.up(1050)]: {
    display:"flex",
    flexDirection:"row",
    img:{
      justifyContent:"center",
      marginRight: "100px",
      marginTop: "15px",
    },
  },
}));

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
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  marginTop: "50px",
  color: "#000000",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "29px",
});