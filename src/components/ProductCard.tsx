import { motion } from "framer-motion";
import type { Subscription } from "@/data/subscriptions";

interface ProductCardProps {
  subscription: Subscription;
  index: number;
  onClick: () => void;
}

const ProductCard = ({ subscription, index, onClick }: ProductCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onClick={onClick}
      className="group w-full text-left bg-card rounded-xl card-shadow overflow-hidden transition-all duration-300 hover:card-hover-shadow hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:[aspect-ratio:3/4]"
    >
      {/* Brand header (image covers the whole area) */}
      <div
        className="relative flex items-center justify-center overflow-hidden h-[55%] sm:h-[55%] max-sm:h-[250px]" //LONGUEUR DES CASES IMAGES
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
          <span className="text-6xl md:text-7xl transition-transform duration-300 group-hover:scale-110">
            {subscription.icon}
          </span>
        )}

        {/* Optional overlay (keeps same style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col justify-between h-[45%] sm:h-[45%] max-sm:h-auto max-sm:min-h-[10px]">
        <div> {/*Longueur de la case blanche */}
          <h3 className="font-serif text-sm font-semibold text-card-foreground leading-snug"> {/* text-sm, text-base ou text-lg la taille de la police texte Apple music etc */}
            {subscription.name}
          </h3>
          <p className="mt-1.5 text-xs text-muted-foreground font-sans line-clamp-2 max-sm:line-clamp-3 truncate">
            {subscription.tagline}{/* text-sm, text-base ou text-lg la taille de la police texte 100 millions, etc */}
          </p>
        </div>

        <div className="flex flex-col items-start mt-3 max-sm:mt-auto max-sm:pt-3 gap-1">
  <span className="text-xs font-medium text-card-foreground font-sans whitespace-nowrap">
    {subscription.price}
  </span>
  <span className="text-[11px] text-accent font-medium font-sans group-hover:translate-x-0.5 transition-transform duration-200">
    Détails →
  </span>
</div>

      </div>
    </motion.button>
  );
};

export default ProductCard;
