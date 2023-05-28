import type Exercise from "./exercise";

export default interface Training {
  name: string;
  exercises: Exercise[];
}