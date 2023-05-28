import type Training from "$lib/types/training";
import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";

export const saveTrainings = async (trainingJson: object) => {

  await Filesystem.writeFile({
    path: 'training/data.json',
    data: JSON.stringify(trainingJson),
    directory: Directory.Data,
    encoding: Encoding.UTF8,
    recursive: true,
  })
}


export const loadTrainings = async (): Promise<Training[]> => {
  const data = await Filesystem.readFile({
    path: 'training/data.json',
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  })

  return await JSON.parse(data.data);
}
