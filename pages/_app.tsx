import localFont from "next/font/local";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Font files can be colocated inside of `pages`
const episcene = localFont({
	src: [
		{
			path: "../public/fonts/test-epicene-display-light.woff2",
			weight: "200",
		},
		{
			path: "../public/fonts/test-epicene-text-regular.woff2",
			weight: "400",
		},
	],
	variable: "--font-episcene",
	adjustFontFallback: "Times New Roman",
});

const nasalization = localFont({
	src: [
		{
			path: "../public/fonts/nasalization-rg.otf",
			weight: "400",
		},
	],
	variable: "--font-nasa",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${episcene.variable} ${nasalization.variable} ${inter.className}`}
		>
			<Component {...pageProps} />
		</main>
	);
}
