export type ReeferMode = 'CONTINUOUS_RUN' | 'START_STOP_CYCLE' | 'DEFROST_CYCLE';

export class ReeferModeHelper {
  public static isContinuousRequired(temperatureSensitiveProduce: boolean): ReeferMode {
    return temperatureSensitiveProduce ? 'CONTINUOUS_RUN' : 'START_STOP_CYCLE';
  }
}\n