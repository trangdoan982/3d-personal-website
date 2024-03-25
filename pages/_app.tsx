import localFont from 'next/font/local'
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
 
// Font files can be colocated inside of `pages`
const episcene = localFont({
    src: [
      {
        path: '../public/fonts/test-epicene-display-light.woff2',
        weight: '200'
      },
      {
        path: '../public/fonts/test-epicene-text-regular.woff2',
        weight: '400'
      }
    ],
    variable: '--font-episcene'
  })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={episcene.className}>
        <Component {...pageProps} />
    </main>
  )
}