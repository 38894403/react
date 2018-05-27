import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.reducer'

@connect(
	state=>({num:state}),
	{addGun,removeGun,addGunAsync}
)
class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const num = this.props.num
		const addGun = this.props.addGun
		const removeGun = this.props.removeGun
		const addGunAsync = this.props.addGunAsync
		return(
		<div>
			<h1>{`现在有机枪${num}把`}</h1>
			<button onClick={addGun}>申请机枪</button>
			<button onClick={removeGun}>上缴机枪</button>
			<button onClick={addGunAsync}>拖两天给机枪</button>
		</div>
		)
	}

}


export default App;

