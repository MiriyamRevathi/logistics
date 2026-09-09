export interface ReeferPreTripLog {
  trailerId: string;
  setpointCelsius: number;
  actualInternalTempCelsius: number;
  pulpTempReadingCelsius: number;
  fuelLevelPct: number;
  reeferMode: 'CONTINUOUS' | 'START_STOP';
}

export class ReeferChecklistEngine {
  public static isReadyForLoading(log: ReeferPreTripLog, maxTempVariance = 2.0): { ready: boolean; issues: string[] } {
    const issues: string[] = [];
    const internalDiff = Math.abs(log.actualInternalTempCelsius - log.setpointCelsius);
    if (internalDiff > maxTempVariance) {
      issues.push(`Internal trailer temp (${log.actualInternalTempCelsius}°C) not within ±${maxTempVariance}°C of setpoint (${log.setpointCelsius}°C)`);
    }
    if (log.fuelLevelPct < 75) {
      issues.push(`Reefer fuel level (${log.fuelLevelPct}%) below mandatory 75% departure threshold`);
    }
    return {
      ready: issues.length === 0,
      issues
    };
  }
}\n