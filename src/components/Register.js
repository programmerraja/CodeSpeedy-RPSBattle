import React  from 'react';

import "./Register.css";

import Player from "./Player.js";

class Register extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={player_name:""};
		this.inputref=React.createRef();
		this.setPlayer=this.setPlayer.bind(this);
	}
	setPlayer(event)
	{

		let name=this.inputref.current.value
		if(name)
		{
			this.setState({player_name:name});
		}
	}

	render() {
				var msg,info_text;
				if(this.state.player_name)
				{
					msg=<Player player_name={this.state.player_name}/>;
				}
				else
 				{
					msg=(<><input type="text" placeholder="Enter the player name.." className="player_name" ref={this.inputref}/>
						<input type="button" value="Register" className="reg_button" onClick={(e)=>{this.setPlayer(e)}}/>
						</>);
						
					info_text=(<div className="info_text"> 
		 			<p>please register to play</p>
		 			</div>);
				}
				return(
						<div>
				 			<div className="register_container">		 						 				
				 				{msg}
				 			</div>
				 			{info_text}
			 			</div>
			 			);
		 	}
 
 }


export default Register;
