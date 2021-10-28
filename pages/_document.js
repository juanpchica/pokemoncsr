import Document, { Head, Html, Main, NextScript } from "next/document";

import { useAuthDispatch } from "../components/context";
import { AuthProvider } from "../components/context";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    //console.log(ctx, "context from documenttttt");
    const originalRenderPage = ctx.renderPage;

    //const dispatch = useAuthDispatch();

    try {
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        name: "juan pablo chica",
      };
    } finally {
      console.log("End Document Context");
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <AuthProvider>
          <div className='juan'>
            <Main />
            <NextScript />
          </div>
        </AuthProvider>
      </Html>
    );
  }
}
