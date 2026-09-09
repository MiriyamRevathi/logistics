export class DirectedPutawayEngine {
  public static canStorePallet(binCurrentWeight: number, palletWeight: number, maxWeight: number): boolean {
    return (binCurrentWeight + palletWeight) <= maxWeight;
  }
}\n