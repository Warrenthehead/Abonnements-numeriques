import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { subscriptions, type Subscription } from "@/data/subscriptions";

const Index = () => {
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (subscription: Subscription) => {
    setSelectedSubscription(subscription);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Product Grid */}
      <section id="abonnements" className="px-2 py-1 md:py-10">  {/*espace entre les cases largeurs des cases Et entre les cases au milieu c'est en bas le gap*/}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2 md:gap-6">
            {subscriptions.map((sub, index) => (
              <ProductCard
                key={sub.id}
                subscription={sub}
                index={index}
                onClick={() => handleCardClick(sub)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-sans">
            © {new Date().getFullYear()} — Abonnements numériques. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        subscription={selectedSubscription}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
