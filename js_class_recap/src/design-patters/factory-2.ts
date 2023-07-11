
export abstract class AuthenticationMethod {
  abstract authenticate(): void
}

class UsernamePassword extends AuthenticationMethod{
  public authenticate() {
    console.log("Auth method with username and password")
  }
}

class Social extends AuthenticationMethod{
  public authenticate() {
    console.log("Auth method with social a/c")
  }
}

class TwoFactor extends AuthenticationMethod{
  public authenticate() {
    console.log("Auth method with two-factor")
  }
}

// Factory
export class AuthenticationFactory {
  static createMethod(method: "password" | "social" | "two-factor") {
    switch (method) {
      case "password":
        return new UsernamePassword()
      case "social":
        return new Social()
      case "two-factor":
        return new TwoFactor()
      default:
        throw new Error("method is not allowed")
    }
  } 
}