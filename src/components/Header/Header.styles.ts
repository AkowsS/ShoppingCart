import { styled } from "@mui/system";

export const Container = styled("div")(({theme})=>({
  [theme.breakpoints.down(1090)]: {

  },
  position:"fixed",
  top:"0",
  width: "100%",
  height: "100px",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
}));
export const DivExtern = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginLeft:"4vw",
  marginRight:"1vw",
});
export const DivOtions = styled("div")(({theme})=>({
  width: "680px",
  marginRight:"50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",


  [theme.breakpoints.down(1090)]: {
    marginRight:"20px",
    justifyContent:"end",
    display: "flex",
    flexWrap: "wrap",
    width:"160px",
    div:{
      "hover":{
        li:{
          display:"block !important",
        },
      },
    },
  },
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
  div:{
    alignItems:"center",
    display:"flex",
    button:{
      border:"none",
      backgroundColor:"#FFFFFF",
      height:"45px",
      cursor:"pointer",
        img:{
          width:"40px",
      },
    },
  },
  [theme.breakpoints.up(1090)]: {
    div:{
      button:{
        display:"none",
      },
    },
  },
}));

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

export const ListOptions = styled("ul") (({theme})=>({
  flexDirection:"row",
  display:"flex",
  alignItems:"center",
  position:"fixed",
  [theme.breakpoints.down(1100)]: {
    li:{
      display:"none",
    },
  },
}));

export const List = styled("li")(({theme})=>({
  listStyle:"none",
  marginLeft:"10px",
  a:{
    [theme.breakpoints.down(1100)]: {
      marginRight:"30px",
    },
    textDecoration: "none",
  },
}));
