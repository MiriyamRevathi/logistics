export class RouteDistanceCache {
  private cache = new Map<string, number>();

  public get(origin: string, dest: string): number | undefined {
    return this.cache.get(`${origin}-${dest}`);
  }

  public set(origin: string, dest: string, dist: number): void {
    this.cache.set(`${origin}-${dest}`, dist);
  }
}\n