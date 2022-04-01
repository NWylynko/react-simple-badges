import fs from "fs/promises";
import path from "path";
import type { Icon } from "./Icon";

export const writeBadge = (badgesPath: string) => async ({name, label, hex}: Icon) => {

  const template = `
import React from "react"
import { Badge } from "../badge"
import type { BadgeProps } from "../badge"

const ${name} = (props: BadgeProps) => <Badge name="${label}" {...props} backgroundColor="${hex}" />

export default ${name}
`;

  const componentPath = path.join(process.cwd(), badgesPath, name) + ".tsx"

  await fs.writeFile(componentPath, template);
  
  return;
}