import { styled } from "@mui/system";
import StoreImage from "../../assets/img/R.jpg"

export const Container = styled("div")({
  width: "100%",
  backgroundImage: `url(${StoreImage})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundAttachment:"fixed",
});
export const DivIntern = styled("div")(({theme})=>({
  [theme.breakpoints.down(1100)]: {
    margin: "110px auto 34px auto",
  },
  margin: "180px auto 34px auto",
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
}));
export const InputRegistration = styled("input")({
  height:"20px",
  borderRadius:"4px",
});
export const LabelRegistration = styled("span")({
  marginTop:"20px",
  height:"30px",
});
export const ConfirmButton = styled("button")({
  ":disabled":{
    width:"100%",
    marginTop: "45px",
    backgroundColor: "grey",
    borderRadius: "5px",
  },
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
export const View = styled("view")({
  marginTop:"4px",
  alignItems:"center",
  display:"flex",
  flexDirection:"row",
  height:"25px",
  img:{
    width:"25px",
    marginRight:"1ch",
  },
  p:{
    fontSize:"14px",
  },
});
