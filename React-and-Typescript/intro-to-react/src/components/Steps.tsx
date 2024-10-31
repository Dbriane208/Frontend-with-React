import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];


export function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);


    function handlePrevious() {
        if (step > 1) setStep(s => s-1);
    }

    function handleNext() {
        if (step < 3) setStep(s => s+1);
    }

    return (
        <>
            <div className="flex justify-end w-96">
                <button className="mb-4" onClick={() => setIsOpen(is => !is)}>&times;</button>
            </div>

            {isOpen && (
                <div className="flex flex-col justify-evenly bg-gray-200 rounded-lg shadow-lg w-96 h-48 ">

                    <div className="flex justify-evenly my-4">
                        <div className={step >= 1 ? "bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center" : "bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"}>1</div>
                        <div className={step >= 2 ? "bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center" : "bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"}>2</div>
                        <div className={step >= 3 ? "bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center" : "bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"}>3</div>
                    </div>

                    <p className="flex justify-center items-center text-lg font-bold text-black">Step {step}: {messages[step - 1]}</p>

                    <div className="flex justify-evenly my-4">
                        <button className="text-lg font-bold rounded-full bg-purple-600 h-10 flex items-center justify-center text-white" onClick={handlePrevious}>Previous</button>
                        <button className="text-lg font-bold rounded-full bg-purple-600 h-10 flex items-center justify-center text-white" onClick={handleNext}>Next</button>
                    </div>

                </div>
            )}

        </>
    );
}