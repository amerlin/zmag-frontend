export const server =
  process.env.REACT_APP_ENV === "production"
    ? "https://zmag.azurewebsites.net"
    : process.env.REACT_APP_ENV === "staging"
    ? "https://zmag.azurewebsites.net"
    : "https://zmag.azurewebsites.net";

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: "your-tenantid.auth0.com",
  client_id: "your-clientid",
  redirect_uri: window.location.origin + "/signin-callback",
  scope: "openid profile QandAAPI email",
  audience: "https://qanda",
};
