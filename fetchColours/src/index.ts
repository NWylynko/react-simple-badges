import axios from "axios";
import { promises as fs } from "fs";

const url =
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json";

const localFile = "icons.json";
const iconsPath = "../src/icons.ts";

interface BaseIcon {
  icons: Icon[];
}

interface Icon {
  [key: string]: string;
  title: string;
  hex: string;
  source: string;
  guidelines: string;
}

(async () => {
  try {
    const { data: { icons: newJson } } = await axios.get<BaseIcon>(url);

    try {
      const oldJson: Icon[] = JSON.parse(await fs.readFile(localFile, "utf-8"));

      if (Equal(oldJson, newJson)) {
        // exit if the file hasn't changed
        console.log("file hasn't changed");
        process.exit(1);
      } else {
        // write the new file for later and continue
        console.log("file has changed");
        await saveData(newJson);
      }
    } catch (error) {
      // if there is an error with the old file just replace it and continue
      await saveData(newJson);
      throw new Error(`couldn't read old data json file: ${error}`);
    }
  } catch (error) {
    throw new Error(`error fetching icons json file: ${error}`);
  }
})();

async function saveData(newData: Icon[]): Promise<void> {
  const dataObject = removeDuplicates(newData, "title")
    .map(({ title, hex }) => ({
      name: cleanTitle(title),
      label: title,
      hex: `#${hex}`
    }))

  const iconsString = JSON.stringify(dataObject)

  await fs.writeFile(localFile, iconsString);
  await fs.writeFile(iconsPath, `
export const icons = ${iconsString} as const
export type Icons = typeof icons
export type IconNames = Icons[number]["label"]
`);
}

function Equal(object1: Icon[], object2: Icon[]) {
  return false
  // return JSON.stringify(object1) === JSON.stringify(object2);
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

const removeDuplicates = (array: Icon[], key: string) => {
  return array.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
  });
}