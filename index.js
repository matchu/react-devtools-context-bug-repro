import * as React from "react";
import * as ReactDOM from "react-dom";

const SampleContext = React.createContext();

const App = () => (
    <SampleContext.Provider value="Hello!">
        <SampleContext.Consumer>
            {value => `The value is: ${JSON.stringify(value)}`}
        </SampleContext.Consumer>
    </SampleContext.Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
