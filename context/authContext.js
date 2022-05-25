import react, { createContext } from "react";

const NumberContext = react.createContext({
	mynumber: NaN,
	setMynumber: (auth) => {},
});

export default NumberContext;
