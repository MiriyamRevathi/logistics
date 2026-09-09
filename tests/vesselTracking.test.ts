import { describe, it, expect } from 'vitest';
import { VesselTrackingEngine } from '../src/modules/ocean/VesselTrackingEngine';

describe('VesselTrackingEngine', () => {
  it('validates authentic IMO vessel numbers', () => {
    expect(VesselTrackingEngine.isValidImo('IMO 9321483')).toBe(true);
    expect(VesselTrackingEngine.isValidImo('9321480')).toBe(false);
  });
});\n