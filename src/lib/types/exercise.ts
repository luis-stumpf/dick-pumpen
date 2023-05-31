import type Rep from "./rep";

export default interface Exercise {
  name: string;
  repAmount: number;
  globalWeight?: number;
  reps?: Rep[];
}