export class AirCargoRatingEngine {
  public static calculateChargeableWeight(actualKg: number, lCm: number, wCm: number, hCm: number): number {
    const volumetricKg = (lCm * wCm * hCm) / 6000;
    return Math.max(actualKg, Math.round(volumetricKg * 100) / 100);
  }
}\n