import { ThemeProvider } from "../context/theme";

import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
