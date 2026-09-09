export class DetentionBillingEngine {
  public static calculateDetention(dwellMinutes: number, freeMinutes = 120, hourlyRate = 75): number {
    const billableMinutes = Math.max(0, dwellMinutes - freeMinutes);
    const billableHours = Math.ceil(billableMinutes / 60);
    return billableHours * hourlyRate;
  }
}\n