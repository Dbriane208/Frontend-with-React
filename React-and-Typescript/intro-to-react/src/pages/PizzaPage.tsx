import { Pizza, pizzaData } from "../components/Pizza";

export function PizzaPage() {
    return (
        <div className="flex flex-col items-center h-screen w-screen">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export function Header() {
    return (
        <header>
            <h1 className="text-4xl text-amber-200 text-transform: uppercase self-stretch">Fast React Pizza Co.</h1>
        </header>
    );
}

export function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <div>
            <main className="flex flex-col justify-center items-center my-4">
                <h2 className="flex items-center justify-center my-4 text-2xl font-bold border-t border-b py-2">Our Menu</h2>

                {numPizzas > 0 ? (
                    <>
                        <p className="mb-4">
                            Authentic Italian cuisine. 6 creaative dishes to choose from. All from our stone oven, all organic, all delicious.
                        </p>

                        <ul className="grid grid-cols-2 grid-rows-3  items-center">
                            {pizzaData.map((pizza, index) => (
                                <Pizza key={index} {...pizza} />
                            ))}
                        </ul>
                    </>
                ) : <p className="my-4">We're still working on our menu. Please come back later :)</p>
                }
            </main>
        </div>
    );
}

export function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="my-4">
            {isOpen ? (
                <div className="flex flex-col justify-center items-center">
                    <p>
                        We're open until {closeHour} : 00. Come visit us or order online.
                    </p>
                    <button className="w-40 bg-amber-500 my-2">Order</button>
                </div>
            ) : <p>We're happy to welcome you between {openHour} : 00 and {closeHour} : 00</p>}
        </footer>
    )
}