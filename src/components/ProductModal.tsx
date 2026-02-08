import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Check } from "lucide-react";
import type { Subscription } from "@/data/subscriptions";

interface ProductModalProps {
  subscription: Subscription | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ subscription, open, onOpenChange }: ProductModalProps) => {
  if (!subscription) return null;

  const whatsappUrl = `https://wa.me/${subscription.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour, je souhaite commander l'abonnement ${subscription.name}`
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-card border-border gap-0">
        {/* Header (image full cover if available, else brand color) */}
        <div
          className="relative h-40 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: subscription.brandColor }}
        >
          {subscription.image ? (
            <img
              src={subscription.image}
              alt={subscription.name}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="text-7xl">{subscription.icon}</span>
          )}

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

          {/* Close */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <DialogHeader className="space-y-2 p-0">
            <DialogTitle className="font-serif text-2xl font-bold text-card-foreground">
              {subscription.name}
            </DialogTitle>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              {subscription.description}
            </p>
          </DialogHeader>

          {/* Price badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium font-sans">
            {subscription.price}
          </div>

          {/* Features */}
          <ul className="space-y-2.5">
            {subscription.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-card-foreground font-sans"
              >
                <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-sans font-medium text-base gap-2 rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5" />
              Commander via WhatsApp
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
