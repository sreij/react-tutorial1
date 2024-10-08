import Article from "./Article"
import Gallery from "./Gallery";

export default function Main() {
    return (
        <main>
            <Article />
            <aside>
                <Gallery />
            </aside>
        </main>
    );
}