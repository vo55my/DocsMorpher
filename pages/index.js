import Link from "next/link";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import MainFeature from "../components/MainFeature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Link
          href="#main-content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-purple-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-purple-50 focus-visible:translate-x-0"
        >
          Loncat ke Konten
        </Link>
        <div>
          <Header />
          <main id="main-content">
            <Jumbotron />
            <MainFeature />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
