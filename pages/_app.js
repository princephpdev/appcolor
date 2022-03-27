import "@shopify/polaris/build/esm/styles.css";
import en from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider i18n={en}>
      <Component {...pageProps} />;
    </AppProvider>
  );
}

export default MyApp;
