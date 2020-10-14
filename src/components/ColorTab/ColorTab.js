export const ColorTab = (tag) => {
  switch (tag) {
    case "active":
      return "green";
    case "inactive":
      return "volcano";
    default:
      return "geekblue";
  }
};
