import { FormEvent, useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false }

];

type ItemsProps = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean
}

export function FarAway() {
    return (
        <div className="h-screen flex flex-col">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Logo() {
    return (
        <div className="flex justify-center items-center h-[15vh] bg-amber-600">
            <h1 className="text-8xl font-bold">🌴Far Away💼</h1>
        </div>
    );
}

function Form() {
    const[description, setDescription] = useState('')
    const[quantity, setQuantity] = useState(1)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newItem = { description, quantity, packed: false, id: Date.now()}
        console.log(newItem);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center text-2xl font-bold h-[10vh] bg-amber-700 px-4">
            <h3>What do you need for your😍 trip?</h3>
            <select value={quantity} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setQuantity(Number(e.target.value))} className="pl-4 pr-2 rounded-2xl bg-amber-200 h-8 text-black">
                {Array.from({length: 20}, (_,i) => i + 1).map((num) => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input className="rounded-2xl text-md bg-amber-200 text-black pl-4" type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className="h-8 w-24 flex justify-center items-center rounded-2xl bg-emerald-500">
                ADD
            </button>

        </form>
    );
}

function PackingList() {
    return (
        <div className="flex flex-col justify-between bg-amber-950 h-[70vh] p-4">
            <ul className="flex justify-center gap-4">
                {initialItems.map((item) => (
                    <Item key={item.id} description={item.description} quantity={item.quantity} id={item.id} packed={item.packed}/>
                ))}
            </ul>
            <div className="flex justify-center pb-4 gap-4">
                <select className="pl-4 pr-2 rounded-2xl bg-amber-200 h-8 text-black">
                    <option value="1">SORT BY PACKED STATUS</option>
                    <option value="2">SORT BY UNPACKED</option>
                    <option value="3">SORT BY LAST ADDED</option>
                </select>
                <button className="h-8 w-32 flex justify-center items-center rounded-2xl bg-amber-200 text-amber-950">
                    CLEAR LIST
                </button>
            </div>
        </div>
    );
}

function Item({ description, quantity, packed }: ItemsProps) {
    return (
        <li className="flex items-center gap-2">
            <span className={packed ? "line-through" : ""}>
                {quantity} {description}
            </span>
            <button className="bg-transparent border-none p-0">❌</button>
        </li>
    );
}

function Stats() {
    return (
        <footer className="flex justify-center items-center h-[10vh] bg-teal-400 text-3xl text-amber-950 font-bold">
            <em>💼You have x items on your list, and you already packed x (x%)</em>
        </footer>
    );
}
