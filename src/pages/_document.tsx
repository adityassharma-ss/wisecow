import { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../styles";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />

                <meta name="description" content="Free CowSay generator" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
