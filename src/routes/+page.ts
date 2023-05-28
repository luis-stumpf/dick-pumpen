import { loadTrainings, saveTrainings } from '$lib/storage/storage';
import { addOrModifiy } from '$lib/storage/trainings';
import type Training from '$lib/types/training';
import type { PageLoad } from './$types';

export const load = (async () => {
  const json: Training[] = [
    {
      "name": "test",
      "exercises": [
        {
          "name": "test exercise",
          "repAmount": 5,
          "reps": [
            {
              "weight": 20
            }
          ]
        }
      ]
    }
  ]

  await saveTrainings(json);
  const data = await loadTrainings()
  return {
    data: data
  };
}) satisfies PageLoad;