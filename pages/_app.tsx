import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app";
import React from "next";

const App = ({
    Component,
    pageProps: { session, ...pageProps
} }: AppProps) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App;