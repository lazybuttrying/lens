import Link from "next/link"

const linkStyle = "appearance-none no-underline hover:text-yellow-300 focus:text-orange-300 active:text-yellow-300 dark:text-white"

export default function Nav() {
    return (
        <nav>
            <ul className={"list-none flex gap-3 "}>
                <li>
                    <Link className={linkStyle} href="/">Home</Link>
                </li>
                <li>
                    <Link className={linkStyle} href="/">About</Link>
                </li>
            </ul>
        </nav>
    )
  }