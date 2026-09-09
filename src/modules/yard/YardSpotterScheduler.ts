export interface YardMoveTask {
  taskId: string;
  trailerNumber: string;
  sourceLocation: string;
  destDoorId: string;
  priority: 'HIGH' | 'NORMAL';
}

export class YardSpotterScheduler {
  public static prioritizeTasks(tasks: YardMoveTask[]): YardMoveTask[] {
    return [...tasks].sort((a, b) => (a.priority === 'HIGH' ? -1 : 1));
  }
}\n