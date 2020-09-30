export const ColorTab = tag => {
  switch (tag) {
    case "ACTIVO": return "green";
    case "INACTIVO": return "volcano";
    default: return "geekblue";
  }
}