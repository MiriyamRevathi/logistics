export interface HumidityReading {
  sensorId: string;
  relativeHumidityPct: number;
  timestamp: string;
}

export class HumidityMonitoringEngine {
  public static isHumidityCompliant(reading: HumidityReading, minPct = 85, maxPct = 95): boolean {
    return reading.relativeHumidityPct >= minPct && reading.relativeHumidityPct <= maxPct;
  }
}\n