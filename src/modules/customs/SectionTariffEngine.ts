export class SectionTariffEngine {
  public static calculateAdValoremDuty(cifValue: number, tariffRatePct = 25.0): number {
    return Math.round((cifValue * (tariffRatePct / 100)) * 100) / 100;
  }
}\n