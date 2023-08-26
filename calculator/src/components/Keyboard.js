const buttonBank = [
    {
        "id" : "zero",
        "show" : "0"
    },
    {
        "id": "one",
        "show": "1"
    },
    {
        "id": "two",
        "show": "2"
    },
    {
        "id": "three",
        "show": "3"
    },
    {
        "id": "four",
        "show": "4"
    },
    {
        "id": "five",
        "show": "5"
    },
    {
        "id": "six",
        "show": "6"
    },
    {
        "id": "seven",
        "show": "7"
    },
    {
        "id": "eight",
        "show": "8"
    },
    {
        "id": "nine",
        "show": "9"
    },
    {
        "id": "add",
        "show": "+"
    },
    {
        "id": "subtract",
        "show": "-"
    },
    {
        "id": "multiply",
        "show": "x"
    },
    {
        "id": "divide",
        "show": "/"
    },
    {
        "id": "equals",
        "show": "="
    }
]

const Keyboard = () => {
    return (
        buttonBank.map((item) => <button id={item.id}>{item.show}</button>)
    );
};

export default Keyboard