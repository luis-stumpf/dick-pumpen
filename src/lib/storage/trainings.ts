import type Training from "$lib/types/training";
import { loadTrainings, saveTrainings } from "./storage";

export const addOrModifiy = async (training: Training) => {
  let storedTrainings = await loadTrainings()
  const index = storedTrainings.findIndex((x) => x.name === training.name)
  if (index) {
    storedTrainings[index] = training;
  } else {
    storedTrainings.push(training);
  }
  await saveTrainings(storedTrainings);
}