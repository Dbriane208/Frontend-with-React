import { Pizza, pizzaData } from "./components/Pizza";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1 className="text-4xl text-amber-200 text-transform: uppercase">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
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

function Footer() {
  return (
    <footer className="my-4">{new Date().toLocaleTimeString()}. We're currently Open</footer>
  )
}


