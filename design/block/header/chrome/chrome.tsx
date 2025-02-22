import Icon from "@/icon/icon"
import Link from "@/link/link"

import "./chrome.css"

export default function Chrome() {
  return (
    <Link
      href="https://chromewebstore.google.com/detail/mmijgfjknikopggigpodefgcgobhooge?utm_source=cron.re"
      target="_blank"
      className="extension"
    >
      <Icon name="chrome" /> Chrome
    </Link>
  )
}
