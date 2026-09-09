import { describe, it, expect } from 'vitest';
import { HazmatPlacardEngine } from '../src/modules/hazmat/HazmatPlacardEngine';

describe('HazmatPlacardEngine', () => {
  it('requires placards for poison gas at any quantity', () => {
    expect(HazmatPlacardEngine.isPlacardRequired('2.3', 10)).toBe(true);
  });
});\n