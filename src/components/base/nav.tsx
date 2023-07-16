import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <ul className={"list-none flex gap-3 "}>
                <li className={"hover:underline"}>
                    <Link className={"no-underline"} href="/">Home</Link>
                </li>
                <li className={"hover:underline"}>
                    <Link className={"no-underline"} href="/">About</Link>
                </li>
            </ul>
        </nav>
    )
  }