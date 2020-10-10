import jwtDecode from "jwt-decode";

class token {
  IsTokenValid = () =>
    this.GetToken() !== undefined &&
    this.GetToken() !== "" &&
    this.GetToken() !== null;

  GetToken = () => {
    return sessionStorage.getItem("coolgym");
  };

  SetToken = (token) => {
    return sessionStorage.setItem("coolgym", token);
  };

  RemoveToken = () => sessionStorage.removeItem("coolgym");

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
