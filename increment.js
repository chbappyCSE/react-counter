// console.log(React);
// console.log(ReactDOM);

const domContainer = document.querySelector('#root');

// const myElement = React.createElement("div", null,[ 
//     React.createElement("p", null, "Paragraph 1"),
//     React.createElement("p", null, "Paragraph 2"),
// ]);

// ReactDOM.render(myElement, domContainer);

// let p = document.createElement("p");
// p.innerHTML = "Hello P";
// domContainer.appendChild(p);

const Increment = () =>{
    return(
        <div>
            <h1 id="display">0</h1>
            <div id="button">
                <button>Increment +</button>
            </div>
        </div>
    );
}

ReactDOM.render(<Increment />, domContainer);

let number = 0;
const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click", () =>{
    number ++;
    display.textContent = number;
});


// const myElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div id="button">
//             <button>Increment +</button>
//         </div>
//     </div>
// );

// ReactDOM.render(Increment(), domContainer);
