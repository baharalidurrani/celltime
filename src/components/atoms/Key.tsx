import React from "react";
import { ButtonBase } from "@mui/material";

type Props = {
  title: string;
  onClick: (char: string) => void;
  noOutline?: boolean;
  hidden?: boolean;
};

export function Key({ title, onClick, noOutline, hidden }: Props): React.ReactElement {
  let styles: any = {
    width: "70px",
    height: "70px",
    margin: "10px",
    borderRadius: "50px",
    fontSize: "30px",
  };
  if (!hidden && !noOutline) {
    styles = {
      ...styles,
      border: "1px solid #444",
    };
  }
  if (title === "phone")
    styles = {
      ...styles,
      backgroundColor: "#34DA4F",
    };
  return (
    <>
      <ButtonBase
        disabled={hidden}
        onClick={
          hidden
            ? undefined
            : () => {
                onClick(title);
              }
        }
        sx={styles}
      >
        {title === "phone" ? <img src="/phone.svg" alt="Call" width="25px" height="25px" /> : title}
      </ButtonBase>
    </>
  );
}
