class token {
  IsTokenValid = () => this.GetToken() !== undefined || this.GetToken() !== "";

  GetToken = () => {
    return sessionStorage.getItem("coolgym");
  };

  SetToken = (token) => {
    return sessionStorage.setItem("coolgym", token);
  };

  RemoveToken = () => sessionStorage.removeItem("coolgym");
}

export const Token = new token();
