import Icon from "@/icon/icon"
import Link from "@/link/link"

import "./raycast.css"

export default function Raycast() {
  return (
    <Link
      href="https://www.raycast.com/astrit/cron"
      target="_blank"
      className="extension"
    >
      <Icon name="raycast" /> Raycast
    </Link>
  )
}
