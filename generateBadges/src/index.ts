import "source-map-support/register"
import fs from "fs/promises"
import { writeBadge } from "./writeBadge";
import { readIcons } from "./readIcons";
// import type { Icon } from "./Icon";
// import path from "path";

const iconsPath = "../icons.json";
const badgesPath = "../src/badges/";
// const srcPath = "../src/";

const main = async () => {
  const icons = await readIcons(iconsPath)

  try {
    await fs.mkdir(badgesPath)
  } catch {}

  await Promise.allSettled(icons.map(writeBadge(badgesPath)));

  // await generateIndex(icons);

  return;
}

main();

// const generateIndex = async (icons: Icon[]) => {
//   let exports = '';

//   icons.forEach(({ name }) => {
//     exports += `export { default as ${name} } from "./badges/${name}";\n`;
//   })

//   const exportsPath = path.join(process.cwd(), srcPath) + "index.ts"

//   await fs.writeFile(exportsPath, exports);

//   return;
// }