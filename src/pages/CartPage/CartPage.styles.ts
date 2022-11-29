import { styled } from "@mui/system";

export const Container = styled("div")({
  width: "100%",
});
export const DivIntern = styled("div")(({theme})=>({
  margin:"177px 91px 94px 91px",
  minHeight:"calc(100vh - 461px)",
  display: "flex",
  [theme.breakpoints.down(1090)]: {
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
}));

export const PaymentArea = styled("div")(({theme})=>({
  marginLeft:"15px",
  width: "40vw",
  height: "252px",
  borderRadius: "5px",
  backgroundColor: "#FFFFFF",
  padding: "15px 0px",
  [theme.breakpoints.down(1090)]: {
    marginTop:"20px",
    width: "380px",
  },
}));

export const DivValues = styled("div")(({theme})=>({
  height: "39px",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  margin:"15px 15px 0 30px",
  p: {
    fontWeight: 400,
    lineHeight: "39px",
    fontSize: "32px",
    color: "#A1A1A1",
    width:"145px",
  },
  span: {
    fontWeight: 600,
    lineHeight: "39px",
    fontSize: "32px",
    color: "#000000",
  },
  [theme.breakpoints.down(1090)]: {
    alignItems:"center",
    flexDirection:"row",
    p: {
      fontWeight: 400,
      lineHeight: "39px",
      fontSize: "32px",
      color: "#A1A1A1",
    },
    span: {
      fontWeight: 600,
      lineHeight: "39px",
      fontSize: "32px",
      color: "#000000",
    },
  },
}));
export const TotalValue = styled("div")({
  height:"75px",
});

export const ItemsArea = styled("div")(({theme})=>({
  width: "50vw",
  [theme.breakpoints.down(1090)]: {
    width: "350px",
  },
}));

export const FinishButton = styled("button")(({theme})=>({
  width:"40vw",
  marginTop: "45px",
  backgroundColor: "#89D963",
  borderRadius: "5px",
  p: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19px",
    alignItems: "center",
  },
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#50982E",
  },
  [theme.breakpoints.down(1090)]: {
    width:"380px",
  },
}));