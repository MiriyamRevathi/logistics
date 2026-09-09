export class UsmcaOriginEngine {
  public static calculateRvc(tv: number, vnm: number): number {
    if (tv <= 0) return 0;
    return Math.round(((tv - vnm) / tv) * 10000) / 100;
  }
}\n