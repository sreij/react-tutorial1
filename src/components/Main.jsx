import Welcome from "./WelcomeText"
import Side from "./ImageSideBar";

export default function Main() {
    return (
        <main>
            <Welcome />
            <aside>
                <Side />
            </aside>
        </main>
    );
}