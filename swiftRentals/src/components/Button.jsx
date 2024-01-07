import React from "react";

//? not destructured
// function Button(props) {
//   return (
//     <button type={props.type} className={`rounded-full px-5 py-3 uppercase font-semibold ${props.bgColor} ${props.textColor} ${props.className}`}>
//       {props.children}
//     </button>
//   )
// }

//? destructured
function Button({
    children,
    type="button",
    bgColor,
    textColor,
    className=""
}) {
  return (
    <button
      type={type}
      className={`rounded-full px-5 py-3 uppercase font-medium ${bgColor} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

/* const obj = {
       name: "saugat"
    }

    console.log(obj.name)

    - destructuring an obj
    const { name } = obj

    console.log(name)


    function Button(props){
        return (
            props.bgColor
            props.textColor
        )
    }

*/
