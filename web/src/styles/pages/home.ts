import { styled } from "@stitches/react";

export const HomeContainer = styled("div", {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    height: "100vh",  
  
    "div": {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem"
    }
});

export const ButtonY = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "8px 32px",
  color: "#fff",
  cursor: "pointer",
  position: "relative",
  fontWeight: "bold",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export const ButtonN = styled("button", {
  backgroundColor: "$red400",
  borderRadius: 4,
  border: 0,
  padding: "8px 32px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    filter: "brightness(0.8)",
  },
});
