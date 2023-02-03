import React from "react"
import ReactDOM from "react-dom/client"
// import { BrowserRouter } from "react-router-dom"
// import { Provider } from "react-redux"
// import store from "./Redux-Saga/Cart/store"
import App from "./App"
// import App1 from "./Projects/App"

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<>
		{/* <BrowserRouter>
			<App1 />
		</BrowserRouter> */}
		<App />
		{/* <Provider store={store}>
			<App />
		</Provider> */}
	</>
)
