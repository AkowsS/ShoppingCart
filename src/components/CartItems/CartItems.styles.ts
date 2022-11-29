import { styled } from "@mui/system";

export const Container = styled("div")(({theme})=>({
  backgroundColor:"#FFFFFF",
  alignItems:"center",
  [theme.breakpoints.down(1090)]: {
   marginBottom:"20px",
   height:"250px",
  },
}));
export const CartItem = styled("div")(({theme})=>({
  //width:"1009px",
  alignItems:"center",
  display:"flex",
  img:{
    margin:"30px 0 30px 30px",
    width:"108px",
    height:"105px",
  },
  [theme.breakpoints.down(1090)]: {
    display:"flex",
    flexDirection:"column",
    img:{
      margin:"0 0 0 0",
      marginTop:"15px",
    },
  },
}));
export const ItemOptions = styled("span")({
  alignItems:"center",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "29px",
  color: "#000000",
  height: "29px",
});
export const TextIformations = styled("div")({
  marginLeft:"15px",
  width:"284px",
  a: {
    textDecoration:"none",
  },
});
export const AmountItems = styled("div")(({theme})=>({
  marginLeft:"auto",
  marginRight:"30px",
  height:"29px",
  display:"flex",
  button: {
    alignItems:"center",
    display:"flex",
    width:"42.5px",
    justifyContent:"center",
    fontWeight: 400,
    lineHeight: "39px",
    fontSize: "32px",
    color: "#A1A1A1",
    height:"29px",
  },
  [theme.breakpoints.down(1090)]: {
    marginLeft:"auto",
    marginRight:"auto",
  },
}));
export const DecrementItemButton = styled("button")({
  height: "29px",
  marginRight: "15px",
});
export const AddItemButton = styled("button")({
  marginLeft: "15px",
  height: "29px",
});
export const RemoveItemButton = styled("button")({
  marginLeft: "15px",
  marginRight: "15px",
  height: "29px",
  p:{
    fontSize: "25px",
  }
});
