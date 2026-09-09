import { describe, it, expect } from 'vitest';
import { CarrierSafetyScoreEngine } from '../src/modules/carrier/CarrierSafetyScoreEngine';

describe('CarrierSafetyScoreEngine', () => {
  it('flags carriers exceeding HOS and maintenance intervention limits', () => {
    const score = {
      carrierDotNumber: '1234567',
      unsafeDrivingPercentile: 45,
      crashIndicatorPercentile: 30,
      hoursOfServicePercentile: 72,
      vehicleMaintenancePercentile: 68,
      controlledSubstancesPercentile: 10,
      driverFitnessPercentile: 20
    };
    const res = CarrierSafetyScoreEngine.isCarrierSafetyCompliant(score);
    expect(res.compliant).toBe(false);
    expect(res.alertCategories).toEqual(['HOS Compliance', 'Vehicle Maintenance']);
  });
});\n