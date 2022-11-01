import { Badge } from "react-simple-badges"

export default async function HomePage() {
  return (
    <>
      <Badge name="Node.js" style={{width: 200}} logoColor="#eb4034" />
      <Badge name="YouTube Gaming" label="Youtube" />
      <Badge name="Valve" label="Value Please fix" style={{padding: 10}} />
      <Badge name="Tesla" backgroundColor="#32a853" />
    </>
  )
}