
import React from "react"
import { Badge } from "../badge.js"
import type { BadgeProps } from "../badge.js"

const Microblog = (props: BadgeProps) => <Badge name="Micro.blog" backgroundColor="#FF8800" {...props} />

export default Microblog
