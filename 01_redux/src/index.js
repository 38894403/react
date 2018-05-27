
import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import {counter} from './index.reducer.js'



const store = createStore(counter,compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : ()=>{}
));


function render(){
	ReactDom.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('root'))
}
render();

store.subscribe(render);
