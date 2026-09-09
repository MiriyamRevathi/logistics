export class ServiceHealthProbe {
  public static getHealthStatus(dbConnected: boolean, redisConnected: boolean): { status: 'UP' | 'DOWN'; timestamp: string } {
    return {
      status: (dbConnected && redisConnected) ? 'UP' : 'DOWN',
      timestamp: new Date().toISOString()
    };
  }
}\n