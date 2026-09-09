export class CountryCodeValidator {
  public static isValidIso2(code: string): boolean {
    return /^[A-Z]{2}$/.test(code.toUpperCase());
  }
}\n