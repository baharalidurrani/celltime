import React from "react";
import { CustomMuiTheme } from "./theme/CustomMuiTheme";

type Props = {};

export function App({}: Props): React.ReactElement {
  console.log("App Rendered 🚀🚀🚀");
  return (
    <CustomMuiTheme>
      <h1>Hello</h1>
    </CustomMuiTheme>
  );
}
