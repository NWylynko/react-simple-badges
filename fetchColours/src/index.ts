import axios from "axios";
import { promises as fs } from "fs";
import { z } from "zod";

const url = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json";

const localFile = "icons.json";
const iconsPath = "../src/icons.ts";

const remoteFileSchema = z.object({
  icons: z.array(
    z.object({
      title: z.string(),
      hex: z.string(),
    })
  )
})

const localFileSchema = z.array(
  z.object({
    name: z.string(),
    label: z.string(),
    hex: z.string(),
  })
)

type RemoteIconObj = z.infer<typeof remoteFileSchema>["icons"][number]
type LocalIconObj = z.infer<typeof localFileSchema>[number]

(async () => {
  try {
    const { data: result } = await axios.get<unknown>(url);
    const newJson = (await remoteFileSchema.parseAsync(result)).icons;
    const newIcons = transformData(newJson);

    try {
      const oldFile: unknown = JSON.parse(await fs.readFile(localFile, "utf-8"));
      const oldJson = await localFileSchema.parseAsync(oldFile);

      if (Equal(oldJson, newIcons)) {
        // exit if the file hasn't changed
        console.log("file hasn't changed");
        process.exit(1);
      } else {
        // write the new file for later and continue
        console.log("file has changed");
        await saveData(newIcons);
      }
    } catch (error) {
      // if there is an error with the old file just replace it and continue
      await saveData(newIcons);
      throw new Error(`couldn't read old data json file: ${error}`);
    }
  } catch (error) {
    throw new Error(`error fetching icons json file: ${error}`);
  }
})();

function transformData(data: RemoteIconObj[]): LocalIconObj[] {
  return removeDuplicates(data, "title").map((icon) => {
    return {
      name: cleanTitle(icon.title),
      label: icon.title,
      hex: `#${icon.hex}`,
    };
  });
}

async function saveData(newData: LocalIconObj[]): Promise<void> {
  const iconsString = JSON.stringify(newData)

  await fs.writeFile(localFile, iconsString);
  await fs.writeFile(iconsPath, `
export const icons = ${iconsString} as const
export type Icons = typeof icons
export type IconNames = Icons[number]["label"]
`);
}

function Equal<Obj extends object>(object1: Obj, object2: Obj): boolean {
  return JSON.stringify(object1) === JSON.stringify(object2);
}

const cleanTitle = (dirtyTitle: string): string => {

  const replacedCommon = dirtyTitle.replaceAll("+", "Plus")

  // grabbed from https://bobbyhadz.com/blog/javascript-remove-non-alphanumeric-characters-from-string

  const clean = replacedCommon.replace(/[^a-z0-9]/gi, '');

  const removedNumbers = convertNumbersToWords(clean);

  // grabbed from https://stackoverflow.com/a/1026087

  const Capitalised = removedNumbers.charAt(0).toUpperCase() + removedNumbers.slice(1);

  if (Capitalised === "React") { // React is special
    return "ReactBadge";
  }

  return Capitalised;
}

const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]

const convertNumbersToWords = (title: string): string => {
  numbers.forEach((word, number) => {
    title = title.replaceAll(number.toString(), word);
  })
  return title;
}

const removeDuplicates = <ArrayItem extends object>(array: ArrayItem[], key: keyof ArrayItem) => {
  return array.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
  });
}