export const getTagLabel = (tag: string) => {
  switch (tag?.toLowerCase()) {
    case "хит":
    case "hit":
      return "ХИТ";
    case "new":
      return "NEW";
    case "sale":
      return "SALE";
    case "premium":
      return "PREMIUM";
    case "hot":
      return "HOT";
    default:
      return tag;
  }
};
