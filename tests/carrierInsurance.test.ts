import { describe, it, expect } from 'vitest';
import { InsuranceVerificationEngine } from '../src/modules/carrier/InsuranceVerificationEngine';

describe('InsuranceVerificationEngine', () => {
  it('rejects expired insurance coverage', () => {
    const cov = {
      policyNumber: 'POL-99',
      autoLiabilityAmount: 2000000,
      cargoAmount: 250000,
      generalLiabilityAmount: 1000000,
      expirationDateIso: '2020-01-01'
    };
    expect(InsuranceVerificationEngine.verifyCoverage(cov)).toBe(false);
  });
});\n