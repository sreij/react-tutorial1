import Article from "./WelcomeMessage"
import Side from "./ImageSideBar";

export default function Main() {
    return (
        <main>
            <Article />
            <aside>
                <Side />
            </aside>
        </main>
    );
}