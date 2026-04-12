import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistoireSection from "@/components/HistoireSection";
import CuisineSection from "@/components/CuisineSection";
import BrunchSection from "@/components/BrunchSection";
import GalerieSection from "@/components/GalerieSection";
import AvisSection from "@/components/AvisSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <FadeIn><HistoireSection /></FadeIn>
    <FadeIn><CuisineSection /></FadeIn>
    <FadeIn><BrunchSection /></FadeIn>
    <FadeIn><GalerieSection /></FadeIn>
    <FadeIn><AvisSection /></FadeIn>
    <FadeIn><InfoSection /></FadeIn>
    <Footer />
  </div>
);

export default Index;
