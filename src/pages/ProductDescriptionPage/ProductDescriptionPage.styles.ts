import { styled } from "@mui/system";

export const Container = styled("div")({
  width: "100%",
});
export const DivIntern = styled("div")({
  margin: "177px 91px 94px 91px",
  minHeight: "calc(100vh - 461px)",
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
  img: {
    marginTop: "15px",
    width: "330px",
    height: "320px",
  },
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
