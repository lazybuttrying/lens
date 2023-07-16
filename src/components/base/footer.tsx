import Nav from "./nav"

export default function Footer() {
    return (
        <footer className={"flex flex-row justify-around w-full"}>
            
            <section>
                <h3>Haul Lens</h3>
                <p>© 2023 Allkorea All rights reserved.</p>
            </section>

            <section>
                <Nav></Nav>
            </section>
        </footer>
    )
  }