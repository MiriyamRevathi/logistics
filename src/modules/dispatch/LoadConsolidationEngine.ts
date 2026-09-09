export class LoadConsolidationEngine {
  public static canConsolidate(shipmentWeights: number[], maxCapacityLbs = 45000): boolean {
    const total = shipmentWeights.reduce((a, b) => a + b, 0);
    return total <= maxCapacityLbs;
  }
}\n