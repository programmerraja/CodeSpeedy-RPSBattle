import React  from 'react';
import './App.css';

import Header from "./components/Header";
import Register from "./components/Register";

class App extends React.Component{
 	render()
			{
				return	(
								<div>
									<Header/>
									<Register/>
								</div>
						)
			}
}
if(module.hot)
{
	module.hot.accept();
}
export default App;
