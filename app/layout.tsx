import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter, Space_Grotesk } from "next/font/google";
import "./globals-custom.css";
import Preloader from "@/components/Preloader";
import RouteChangeHandler from "@/components/RouteChangeHandler";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Softvence - Digital Design Agency",
  description: "Digital Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Viewport for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

        {/* Favicon */}
        <link rel="icon" href="/wp-content/uploads/2024/03/cropped-FAV_softvence-1-32x32.png" sizes="32x32" />
        <link rel="icon" href="/wp-content/uploads/2024/03/cropped-FAV_softvence-1-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/wp-content/uploads/2024/03/cropped-FAV_softvence-1-180x180.png" />

        {/* CSS Assets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/splitting.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className="loading">

        {/* Global cursor helper (used by main.js for hover labels like Click/Open/Play/Prev/Next) */}
        <div className="body--cursor">
          <p className="click">Click</p>
          <p className="open">Open</p>
          <p className="play">Play</p>
          <p className="prev">Prev</p>
          <p className="next">Next</p>
        </div>

        <Preloader />
        <RouteChangeHandler />
        {children}

        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/splitting.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/aos.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
