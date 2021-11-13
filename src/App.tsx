import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Key } from "./components/atoms/Key";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

type Props = {};

export function App({}: Props): React.ReactElement {
  const textRef = useRef<HTMLHeadingElement>(null);
  const updatePhone = (char: string) => {
    if (textRef.current) textRef.current.innerText = textRef.current.innerText + char;
  };
  return (
    <CustomMuiTheme>
      <Grid container direction="column" justifyContent="space-between" alignItems="center">
        <Box m={3}>
          <Typography ref={textRef} variant="h4" contentEditable>
            +
          </Typography>
        </Box>
        <Grid container direction="row" justifyContent="center">
          <Key title="1" onClick={updatePhone} />
          <Key title="2" onClick={updatePhone} />
          <Key title="3" onClick={updatePhone} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="4" onClick={updatePhone} />
          <Key title="5" onClick={updatePhone} />
          <Key title="6" onClick={updatePhone} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="7" onClick={updatePhone} />
          <Key title="8" onClick={updatePhone} />
          <Key title="9" onClick={updatePhone} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="*" onClick={updatePhone} />
          <Key title="0" onClick={updatePhone} />
          <Key title="#" onClick={updatePhone} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="+" onClick={updatePhone} noOutline />
          <Key
            title="phone"
            onClick={() => {
              window.location.href = `tel:${textRef.current?.innerText}`;
            }}
            noOutline
          />
          <Key
            title="←"
            onClick={() => {
              if (textRef.current)
                textRef.current.innerText = textRef.current.innerText.slice(0, -1);
            }}
            noOutline
          />
        </Grid>
        <Box m={3} />
      </Grid>
    </CustomMuiTheme>
  );
}
