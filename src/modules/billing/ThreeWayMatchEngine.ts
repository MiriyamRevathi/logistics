export class ThreeWayMatchEngine {
  public static verifyMatch(poQty: number, receiptQty: number, invoiceQty: number, maxVariance = 0): boolean {
    return Math.abs(poQty - receiptQty) <= maxVariance && Math.abs(receiptQty - invoiceQty) <= maxVariance;
  }
}\n