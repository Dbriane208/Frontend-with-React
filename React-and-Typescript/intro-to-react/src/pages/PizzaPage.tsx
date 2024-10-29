import { Pizza, pizzaData } from "../components/Pizza";

export function PizzaPage() {
    return(
    <div className="flex flex-col items-center">
        <Header />
        <Menu />
        <Footer />
    </div>
    );
}


export function Header() {
    return (
        <header>
            <h1 className="text-4xl text-amber-200 text-transform: uppercase">Fast React Pizza Co.</h1>
        </header>
    );
}

export function Menu() {
    return (
        <div>
            <h2 className="flex items-center justify-center my-4 text-2xl font-bold border-t border-b py-2">Our Menu</h2>
            <main className="grid grid-cols-2 grid-rows-3  items-center">
                {pizzaData.map((pizza, index) => (
                    <Pizza key={index} {...pizza} />
                ))}
            </main>
        </div>

    );
}

export function Footer() {
    return (
        <footer className="my-4">{new Date().toLocaleTimeString()}. We're currently Open</footer>
    )
}


