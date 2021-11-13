import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Key } from "./components/atoms/Key";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

type Props = {};

export function App({}: Props): React.ReactElement {
  console.log("App Rendered 🚀🚀🚀");
  const [phone, setPhone] = useState("+");
  return (
    <CustomMuiTheme>
      <Grid container direction="column" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{phone}</Typography>
        <Grid container direction="row" justifyContent="center">
          <Key title="1" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="2" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="3" onClick={(char) => setPhone((prev) => prev + char)} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="4" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="5" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="6" onClick={(char) => setPhone((prev) => prev + char)} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="7" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="8" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="9" onClick={(char) => setPhone((prev) => prev + char)} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="*" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="0" onClick={(char) => setPhone((prev) => prev + char)} />
          <Key title="#" onClick={(char) => setPhone((prev) => prev + char)} />
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Key title="" onClick={() => ""} hidden />
          <Key
            title="Call"
            onClick={() => {
              window.location.href = `tel:${phone}`;
            }}
          />
          <Key
            title={phone ? "⤫" : ""}
            onClick={() => setPhone((prev) => prev.slice(0, -1))}
            hidden={!Boolean(phone)}
            deleteKey
          />
        </Grid>
        {/* <a href={`tel:${phone}`}>Call</a> */}
      </Grid>
    </CustomMuiTheme>
  );
}
