export class LayoverPayEngine {
  public static calculateLayoverPay(hoursDelayed: number, freeHours = 24, dailyRate = 200): number {
    if (hoursDelayed <= freeHours) return 0;
    const days = Math.ceil((hoursDelayed - freeHours) / 24);
    return days * dailyRate;
  }
}\n