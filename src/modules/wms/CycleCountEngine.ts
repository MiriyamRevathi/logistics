export class CycleCountEngine {
  public static getCountCadenceDays(skuClass: 'A' | 'B' | 'C'): number {
    switch (skuClass) {
      case 'A': return 30;
      case 'B': return 90;
      case 'C': return 180;
    }
  }
}\n