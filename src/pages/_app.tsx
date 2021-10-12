import "src/styles/global.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <UserProvider>
      <props.Component {...props.pageProps} />
    </UserProvider>
  );
};

export default App;
