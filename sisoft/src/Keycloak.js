







const keycloak = Keycloak({
  realm: "MyDemo",
  auth-server-url: "http://localhost:8080/auth",
  ssl-required: "external",
  resource: "my-react-client",
  public-client: true,
  confidential-port: 0
});