import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import StoreImage from "../../assets/img/backimg.jpg"

export const Container = styled("div")({
  width: "100%",
  backgroundImage: `url(${StoreImage})`,
  backgroundSize:"cover",
  backgroundPosition:"right",
  backgroundRepeat:"no-repeat",
  backgroundAttachment:"fixed",
});
export const DivIntern = styled("div")({
  margin: "177px auto 94px auto",
  minHeight: "calc(100vh - 461px)",
  display:"flex",
  justifyContent:"center",
  div:{
    width: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  p:{
    display:"flex",
  }
});
export const InputLogin = styled("input")({
  height:"20px",
  borderRadius:"4px",
  marginBottom:"20px",
});
export const TextLogin = styled("span")({
  height:"30px",
});
export const ConfirmButton = styled("button")({
  width:"100%",
  marginTop: "45px",
  backgroundColor: "#89D963",
  borderRadius: "5px",
  p: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19px",
    alignItems: "center",
    justifyContent:"center",
  },
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#50982E",
  },
});
export const RegistrationDiv = styled("p")({
  display:"flex",
  alignItems:"center",
  a:{
    marginLeft:"1ch",
  },
  img:{
    width:"20px",
    height:"20px",
    marginLeft:"1ch",
  },
});