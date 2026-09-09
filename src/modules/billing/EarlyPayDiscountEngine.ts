export class EarlyPayDiscountEngine {
  public static calculateQuickPay(grossAmount: number, discountPct = 0.02): { netAmount: number; discountAmount: number } {
    const discount = Math.round(grossAmount * discountPct * 100) / 100;
    return {
      netAmount: Math.round((grossAmount - discount) * 100) / 100,
      discountAmount: discount
    };
  }
}\n