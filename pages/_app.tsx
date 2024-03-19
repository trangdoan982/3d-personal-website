import localFont from 'next/font/local'
import 'tailwindcss/tailwind.css';
 
// Font files can be colocated inside of `pages`
const episcene = localFont({
    src: [
      {
        path: '../public/fonts/TestEpiceneDisplay-Regular.otf',
        weight: '20'
      }
    ],
    variable: '--font-episcene'
  })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={episcene.className}>
        <Component {...pageProps} />
    </main>
  )
}