export class CtpatSecurityEngine {
  public static isHighSecuritySeal(sealNumber: string): boolean {
    return sealNumber.trim().length >= 6;
  }
}\n