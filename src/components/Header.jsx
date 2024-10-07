import Navi from "./Navigation";

export default function Header() {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">BIRDWATCHING</h1>
                    <img src="dove.png" alt="a simple dove logo" />
                    <Navi />
                </div>
                
            </div>
        </header>
    );
}