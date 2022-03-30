import { CustomAppProps } from "../ts-types/componentTypes";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/Global.styled";
import Layout from "../components/Layout";

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
