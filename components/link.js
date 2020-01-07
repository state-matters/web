import NextLink from "next/link"
import { linkResolver } from "constants"

export default function Link(type, element, content, children, index) {
  return (
    <NextLink key={element.data.id} href={linkResolver(element.data)}>
      <a>{content}</a>
    </NextLink>
  )
}
