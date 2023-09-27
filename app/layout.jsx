import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>IMDB Clone</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="this is imdb web site " />
      <link rel="icon" href="./favicon.ico" />
      <body className="">
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
