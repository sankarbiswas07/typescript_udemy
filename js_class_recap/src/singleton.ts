
/**
 * Singleton design pattern.
 * SOme use-case:
 * - Resource sharing
 * - Centralized configuration
 * - Global state management
 * - Caching
 * - Dependency injection
 * - Easy access to functionality
 */
class Logger {
  // static method is belong to class, not available in object
  // private access specifier used to make the variable private to Logger class
  private static instance: Logger

  private constructor(
    private reset: string = "\x1b[0m",
    private red: string = "\x1b[31m",
    private green: string = "\x1b[32m",
    private yellow: string = "\x1b[33m",
    private blue: string = "\x1b[34m"
  ) {
    // Private constructor to prevent instantiate
    // New is not allowed
  }

  // Log() is public and a static method. available in Logger.log()
  public static log(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public info(message: string): void {
    console.log(`${this.blue}${message}${this.reset}`)
  }
  public warn(message: string): void {
    console.log(`${this.yellow}${message}${this.reset}`)
  }
  public success(message: string): void {
    console.log(`${this.green}${message}${this.reset}`)
  }
  public error(message: string): void {
    console.log(`${this.red}${message}${this.reset}`)
  }
}

const log = Logger.log()

log.info("Info: I am a singleton class")
log.success("I am green")
log.warn("I am yellow")
log.error("I am red")