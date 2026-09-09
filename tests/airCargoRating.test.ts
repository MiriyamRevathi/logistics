import { describe, it, expect } from 'vitest';
import { AirCargoRatingEngine } from '../src/modules/air/AirCargoRatingEngine';

describe('AirCargoRatingEngine', () => {
  it('takes higher of volumetric or actual gross weight', () => {
    const chargeable = AirCargoRatingEngine.calculateChargeableWeight(50, 100, 100, 100);
    expect(chargeable).toBe(166.67);
  });
});\n