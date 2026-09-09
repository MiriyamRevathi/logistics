export class HazmatPlacardEngine {
  public static isPlacardRequired(hazardClass: string, weightLbs: number): boolean {
    if (['1.1', '1.2', '2.3', '4.3', '5.2', '6.1', '7'].includes(hazardClass)) return true;
    return weightLbs >= 1001;
  }
}\n