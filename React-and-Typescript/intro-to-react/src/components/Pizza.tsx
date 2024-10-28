/* eslint-disable react-refresh/only-export-components */
export const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "prosciutto.jpg",
        soldOut: false,
    },
];

type PizzaProps = {
    name: string,
    ingredients: string,
    price: number,
    photoName: string,
    soldOut: boolean
}

export function Pizza({name,ingredients,price,photoName,soldOut} : PizzaProps) {
    return (
        <div className="flex items-center text-center my-5">
            <img className="w-40 h-auto rounded-lg shadow-lg" src={photoName} alt="Pizza" />
            <div className="flex flex-col mx-3">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h2 className="text-2xl font-bold">{price}</h2>
            <h2 className="text-2xl font-bold">{soldOut}</h2>
            <p className="text-gray-600 text-wrap">{ingredients}</p>
            </div>
        </div>
    );
}


