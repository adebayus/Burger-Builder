
import './App.css';
// 
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
			<div>
				<Layout>
					<BurgerBuilder/>
				</Layout>
			</div>
		);
    }
}

export default App;
