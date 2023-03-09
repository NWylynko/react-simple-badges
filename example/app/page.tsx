import { Badge } from "react-simple-badges"

export default async function HomePage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Badge name="Node.js" style={{width: 200}} logoColor="#eb4034" />
      {/* @ts-expect-error Server Component */}
      <Badge name="YouTube Gaming" label="Youtube" />
      {/* @ts-expect-error Server Component */}
      <Badge name="Valve" label="Value Please fix" style={{padding: 10}} />
      {/* @ts-expect-error Server Component */}
      <Badge name="Tesla" backgroundColor="#32a853" />
    </>
  )
}