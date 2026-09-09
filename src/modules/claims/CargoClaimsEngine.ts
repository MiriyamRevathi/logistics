export class CargoClaimsEngine {
  public static calculateLiability(invoiceValue: number, salvageCredit: number): number {
    return Math.max(0, invoiceValue - salvageCredit);
  }
}\n