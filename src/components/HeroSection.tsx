import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 px-6 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight"
        >
          Bienvenue
          <span className="block mt-1 text-muted-foreground font-medium text-3xl md:text-4xl lg:text-5xl">
            Abonnements numériques
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed"
        >
          Choisissez votre abonnement préféré et commandez directement via
          WhatsApp. Simple, rapide et sans engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span className="font-sans">Livraison instantanée par WhatsApp</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
