import React, { useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./customTheme";

// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

interface Props {
  children: React.ReactNode;
}
export function CustomMuiTheme(props: Props) {
  const goDarkQuery = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        ...customTheme,
        palette: {
          ...customTheme.palette,
          mode: goDarkQuery ? "dark" : "light",
        },
      }),
    [goDarkQuery]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
