import React from "react";
import Box from "@mui/system/Box";

type Props = {
  title: string;
  onClick: (char: string) => void;
  deleteKey?: boolean;
  hidden?: boolean;
};

export function Key({ title, onClick, deleteKey, hidden }: Props): React.ReactElement {
  let styles: any = { width: "70px", height: "70px", margin: "10px" };
  const both = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    cursor: "pointer",
  };
  if (deleteKey && !hidden) {
    styles = {
      ...styles,
      ...both,
    };
  } else if (!hidden) {
    styles = {
      ...styles,
      ...both,
      borderRadius: "50px",
      border: "1px solid #444",
    };
  }
  return (
    <>
      <Box
        onClick={
          hidden
            ? undefined
            : () => {
                onClick(title);
              }
        }
        sx={styles}
      >
        {title}
      </Box>
    </>
  );
}
