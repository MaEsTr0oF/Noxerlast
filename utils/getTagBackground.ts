
export const getTagBackground = (tag: string) => {
    switch (tag?.toLowerCase()) {
      case "хит":
        return "bg-[#ff6723]";
      case "hit":
        return "bg-[#ff6723]";
      case "new":
        return "bg-[#45b649]";
      case "sale":
        return "bg-[#ffca28]";
      default:
        return "bg-[#292928]";
    }
  };