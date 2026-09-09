import { describe, it, expect } from 'vitest';
import {
  INITIAL_CUSTOMERS,
  INITIAL_WAREHOUSES,
  INITIAL_VEHICLES,
  INITIAL_DRIVERS,
  INITIAL_SHIPMENTS,
  INITIAL_ORDERS
} from '../src/mockData';

describe('Mock Data Integrity', () => {
  it('contains valid initial shipments', () => {
    expect(INITIAL_SHIPMENTS.length).toBeGreaterThan(0);
    expect(INITIAL_SHIPMENTS[0]).toHaveProperty('id');
    expect(INITIAL_SHIPMENTS[0]).toHaveProperty('status');
  });

  it('contains valid initial vehicles and drivers', () => {
    expect(INITIAL_VEHICLES.length).toBeGreaterThan(0);
    expect(INITIAL_DRIVERS.length).toBeGreaterThan(0);
  });

  it('contains valid initial warehouses and orders', () => {
    expect(INITIAL_WAREHOUSES.length).toBeGreaterThan(0);
    expect(INITIAL_ORDERS.length).toBeGreaterThan(0);
  });
});
