"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { UserAuthContexProvider } from "@/Context/UserAuthContext";
import store from "@/Store/store";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-up";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { UserNextAuthContexProvider } from "@/Context/useNextAuthContext";
import WarnModel from "@/Components/Modal/WarnModel";
import { UseStoreContextProvider } from "@/Context/UseStoreContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        />
      </head>
      <body className="bgBackground text-sm md:text-base text-black">
        <Provider store={store}>
          <UserAuthContexProvider>
            <UserNextAuthContexProvider>
              <UseStoreContextProvider>
                <Navbar />
                <WarnModel />
                <div className="px-5 pb-5">
                  <Toaster position="top-center" reverseOrder={false} />
                  {children}
                </div>
                {/* <Footer /> */}
                <ScrollToTop showUnder={160}>
                  <i className="bi text-4xl pColor bi-arrow-up-square-fill"></i>
                </ScrollToTop>
              </UseStoreContextProvider>
            </UserNextAuthContexProvider>
          </UserAuthContexProvider>
        </Provider>
      </body>
    </html>
  );
}
