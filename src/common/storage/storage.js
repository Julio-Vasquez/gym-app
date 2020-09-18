class token {
  Decode = (token) => jwtDecode(token || this.GetToken());

  IsTokenValid = () => this.GetToken() !== undefined || this.GetToken() !== "";

  CheckToken = (token) => {
    try {
      return jwtDecode(token) !== undefined;
    } catch (e) {
      return false;
    }
  };

  GetToken = () => {
    return sessionStorage.getItem("coolgym");
  };

  SetToken = (token) => {
    return sessionStorage.setItem("coolgym", token);
  };

  RemoveToken = () => sessionStorage.removeItem("coolgym");
}

export const Token = new token();
