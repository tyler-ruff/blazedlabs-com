import type { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
    config.autoAddCss = false;
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}