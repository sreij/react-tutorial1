import Article from "./Article"
import Gallery from "./Gallery";

export default function Main() {
    return (
        <main>
            <section classname="section">
                <Article />
            </section>
            <aside>
                <Gallery />
            </aside>
        </main>
    );
}