import "./Keyboard.css";

const buttonBank = [
    {
        "id": "add",
        "show": "+",
        "class": "operator"
    },
    {
        "id": "subtract",
        "show": "-",
        "class": "operator"
    },
    {
        "id": "multiply",
        "show": "*",
        "class": "operator"
    },
    {
        "id": "divide",
        "show": "/",
        "class": "operator"
    },
    {
        "id": "equals",
        "show": "=",
        "class": "equals"
    },
    {
        "id": "seven",
        "show": 7,
        "class": ""
    },
    {
        "id": "eight",
        "show": 8,
        "class": ""
    },
    {
        "id": "nine",
        "show": 9,
        "class": ""
    },
    {
        "id": "four",
        "show": 4,
        "class": ""
    },
    {
        "id": "five",
        "show": 5,
        "class": ""
    },
    {
        "id": "six",
        "show": 6,
        "class": ""
    },
    {
        "id": "one",
        "show": 1,
        "class": ""
    },
    {
        "id": "two",
        "show": 2,
        "class": ""
    },
    {
        "id": "three",
        "show": 3,
        "class": ""
    },
    {
        "id": "clear",
        "show": "Clear",
        "class": "operator"
    },
    {
        "id" : "zero",
        "show" : 0,
        "class": ""
    },
    {
        "id": "decimal",
        "show": ".",
        "class": ""
    }
]

const Keyboard = ({onClick}) => {
    return (
        buttonBank.map((item) => 
            <button 
              id={item.id} 
              onClick={onClick}
              className={item.class}
            >            
              {item.show}
            </button>)
        );
};

export default Keyboard