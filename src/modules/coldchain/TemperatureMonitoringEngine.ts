export interface TemperatureReading {
  sensorId: string;
  shipmentId: string;
  timestamp: string;
  celsius: number;
  batteryLevelPct?: number;
}

export interface ExcursionAlert {
  shipmentId: string;
  excursionType: 'UNDER_TEMP' | 'OVER_TEMP';
  breachStart: string;
  breachEnd?: string;
  maxRecordedTemp: number;
  minRecordedTemp: number;
  totalBreachMinutes: number;
}

export class TemperatureMonitoringEngine {
  public static evaluateBreach(
    readings: TemperatureReading[],
    minAllowedTemp: number,
    maxAllowedTemp: number
  ): ExcursionAlert[] {
    const alerts: ExcursionAlert[] = [];
    const sorted = [...readings].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    let currentBreach: Partial<ExcursionAlert> | null = null;

    for (const r of sorted) {
      const isOver = r.celsius > maxAllowedTemp;
      const isUnder = r.celsius < minAllowedTemp;

      if (isOver || isUnder) {
        if (!currentBreach) {
          currentBreach = {
            shipmentId: r.shipmentId,
            excursionType: isOver ? 'OVER_TEMP' : 'UNDER_TEMP',
            breachStart: r.timestamp,
            maxRecordedTemp: r.celsius,
            minRecordedTemp: r.celsius,
            totalBreachMinutes: 0
          };
        } else {
          currentBreach.maxRecordedTemp = Math.max(currentBreach.maxRecordedTemp || r.celsius, r.celsius);
          currentBreach.minRecordedTemp = Math.min(currentBreach.minRecordedTemp || r.celsius, r.celsius);
        }
      } else if (currentBreach) {
        currentBreach.breachEnd = r.timestamp;
        const durationMin = (new Date(r.timestamp).getTime() - new Date(currentBreach.breachStart!).getTime()) / (1000 * 60);
        currentBreach.totalBreachMinutes = Math.round(durationMin);
        alerts.push(currentBreach as ExcursionAlert);
        currentBreach = null;
      }
    }

    if (currentBreach) {
      alerts.push(currentBreach as ExcursionAlert);
    }

    return alerts;
  }
}\n