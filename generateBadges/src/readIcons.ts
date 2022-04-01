import fs from "fs/promises";
import { Icon } from "./Icon";

export const readIcons = async (iconsPath: string) => JSON.parse(await fs.readFile(iconsPath, "utf-8")) as Icon[];
