import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <>
              <noscript>
                <img src="https://shy.maatt.ch/ingress/6ca8c840-0db8-42ce-91b1-2b185abca277/pixel.gif" />
              </noscript>
              <script
                defer
                src="https://shy.maatt.ch/ingress/6ca8c840-0db8-42ce-91b1-2b185abca277/script.js"
                type="text/javascript"
              ></script>
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
