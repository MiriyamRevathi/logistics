import { describe, it, expect } from 'vitest';
import { ServiceHealthProbe } from '../src/modules/system/ServiceHealthProbe';

describe('ServiceHealthProbe', () => {
  it('reports UP status when all dependencies are healthy', () => {
    const res = ServiceHealthProbe.getHealthStatus(true, true);
    expect(res.status).toBe('UP');
  });
});\n