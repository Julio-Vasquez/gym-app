import jwtDecode from "jwt-decode";

class token {
  IsTokenValid = () =>
    this.GetToken() !== undefined &&
    this.GetToken() !== "" &&
    this.GetToken() !== null;

  GetToken = () => {
    return localStorage.getItem("coolgym");
  };

  SetToken = (token) => {
    return localStorage.setItem("coolgym", token);
  };

  RemoveToken = () => localStorage.removeItem("coolgym");

  CheckToken = (token) => {
    try {
      const currentToken = jwtDecode(token);
      return (
        currentToken !== undefined &&
        currentToken.exp >= Math.round(new Date().getTime() / 1000)
      );
    } catch (e) {
      return false;
    }
  };
}

export const Token = new token();
