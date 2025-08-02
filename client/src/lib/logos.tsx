import genesisLogoNavy from "@assets/Genesis_1754151875851.png";
import genesisLogoWhite from "@assets/Genesis600_1754151875852.png";

export const GenesisLogoNavy = ({ className = "w-full h-full" }: { className?: string }) => (
  <img 
    src={genesisLogoNavy} 
    alt="Genesis Initiative Logo" 
    className={className}
  />
);

export const GenesisLogoWhite = ({ className = "w-full h-full" }: { className?: string }) => (
  <img 
    src={genesisLogoWhite} 
    alt="Genesis Initiative Logo" 
    className={className}
  />
);
