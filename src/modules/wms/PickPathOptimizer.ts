export class PickPathOptimizer {
  public static orderAisles(aisleNumbers: number[]): number[] {
    return [...aisleNumbers].sort((a, b) => a - b);
  }
}\n