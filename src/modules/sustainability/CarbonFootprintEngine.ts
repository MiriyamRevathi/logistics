export type TransportMode = 'ROAD_DIESEL' | 'ROAD_EV' | 'RAIL' | 'OCEAN_CONTAINER' | 'AIR_FREIGHT';

export interface CarbonCalculationRequest {
  transportMode: TransportMode;
  cargoWeightKg: number;
  distanceKm: number;
}

export class CarbonFootprintEngine {
  // Average emission factors (g CO2e per ton-km) based on GLEC Framework
  private static EMISSION_FACTORS: Record<TransportMode, number> = {
    ROAD_DIESEL: 62.0,
    ROAD_EV: 12.5,
    RAIL: 22.0,
    OCEAN_CONTAINER: 8.4,
    AIR_FREIGHT: 602.0
  };

  public static calculateEmissionsKg(request: CarbonCalculationRequest): number {
    const { transportMode, cargoWeightKg, distanceKm } = request;
    const factor = this.EMISSION_FACTORS[transportMode] ?? 62.0;
    const weightTons = cargoWeightKg / 1000.0;
    const tonKm = weightTons * distanceKm;
    const totalGrams = tonKm * factor;
    return Math.round((totalGrams / 1000.0) * 100) / 100;
  }
}\n