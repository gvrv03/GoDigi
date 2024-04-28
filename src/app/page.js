import AboutUs from "@/Components/Home/AboutUs";
import ContactUs from "@/Components/Home/ContactUs";
import FeatureBlog from "@/Components/Home/FeatureBlog";
import LandingPage from "@/Components/Home/LandingPage";
import Skills from "@/Components/Home/Skills";

export const metadata = {
  title: "GoDigi || Personal Website ",
  applicationName: "GoDigi || Personal Website ",
  description:
    "  Hi, I'm GoDigi, an Indian web developer   working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
  keywords: [
    "its.gvrv_n",
    "gvrv_n",
    "GoDigi",
    "GoDigi Ghatanji",
    "Ghatanji",
    "Narnaware Garuav",
  ],
  images: ["/gaurav.svg"],
  url: "/",
  twitter: {
    card: "summary_large_image",
    title: "GoDigi || Personal Website ",
    url: "/",
    images: ["/gaurav.svg"],
    creator: "@gvrv_n",
    description:
      "  Hi, I'm GoDigi, an Indian web developer working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
    keywords: [
      "its.gvrv_n",
      "gvrv_n",
      "GoDigi",
      "GoDigi Ghatanji",
      "Ghatanji",
      "Narnaware Garuav",
    ],
  },
  openGraph: {
    title: "GoDigi || Personal Website ",
    url: "/",
    images: ["/gaurav.svg"],
    description:
      "  Hi, I'm GoDigi, an Indian web developer working out of Maharashtra. I have a strong desire to make the technical and aesthetic components of digital goods come to life. When I'm creating, learning, exploring, and considering ways to improve things, I'm happy.",
    keywords: [
      "its.gvrv_n",
      "gvrv_n",
      "GoDigi",
      "GoDigi Ghatanji",
      "Ghatanji",
      "Narnaware Garuav",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="container flex mt-5 flex-col gap-20 m-auto">
        {/* <AboutUs /> */}
        {/* <Skills /> */}
        <FeatureBlog />
        <ContactUs />
      </div>
    </main>
  );
}
