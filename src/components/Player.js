import React  from 'react';
import "./Player.css";
import Weapon from "./Weapon.js";


class Player extends React.Component
{
	constructor(props)
	{
		super(props);
		this.player_name=props.player_name;
		this.state={player_score:0,bot_score:0,result:""};
		this.weapons=["rock","paper","scissor"]
		this.playerClicked=this.playerClicked.bind(this);
	}

	playerClicked(player_weapon)
	{
		let bot_weapon=this.botClicked();
		this.findWinner(player_weapon,bot_weapon);	
	}
	
	botClicked()
	{
		return this.weapons[Math.floor(Math.random()*3)];
	}

	findWinner(player_weapon,bot_weapon)
	{
		
		if((player_weapon==="rock"  && bot_weapon==="scissor") || 
		   (player_weapon==="scissor" && bot_weapon==="paper") ||
		   (player_weapon==="paper" && bot_weapon==="rock")
		   )
		{

			this.setState((state)=>({player_score:state.player_score+1,bot_score:state.bot_score,result:"You Won"}),()=>{this.isBattleOver();});

		}
		else if((bot_weapon==="rock"  && player_weapon==="scissor") || 
			(bot_weapon==="scissor" && player_weapon==="paper") ||
			(bot_weapon==="paper" && player_weapon==="rock"))
		{

			this.setState((state)=>({player_score:state.player_score,bot_score:state.bot_score+1,result:"You Loose"}),()=>{this.isBattleOver();});
		}
		else
		{
			this.setState((state)=>({player_score:state.player_score,bot_score:state.bot_score,result:"Draw"}),()=>{this.isBattleOver();});
		}
	}

	isBattleOver()
	{
		if(this.state.player_score>=5)
		{
			alert("You Won The Battle ");
			this.setState({player_score:0,bot_score:0,result:""});
			
		}
		else if (this.state.bot_score>=5)
		{
			alert("You Loose The Battle ");
			this.setState({player_score:0,bot_score:0,result:""});
		}
	}

	render() {
				return(
		 			<div className="player_battle">
		 					<div className="scoreboard">
			 					
			 					<div className="player_score">
				 					<p>	{this.player_name}</p>
				 					<p>{this.state.player_score}</p>
			 					</div>
			 					
			 					<div className="bot_score">
									<p>Bot</p>			 					
			 						<p>{this.state.bot_score}</p>
			 					</div>
		 					</div>

		 					
		 					<div className="weapon_container">
			 					<Weapon weapon_name={this.weapons[0]} clicked={this.playerClicked}/>
			 					<Weapon weapon_name={this.weapons[1]} clicked={this.playerClicked}/>
			 					<Weapon weapon_name={this.weapons[2]} clicked={this.playerClicked}/>
			 				</div>

			 				<div className="result">
			 					<p>{this.state.result}</p>
			 				</div>
		 			</div> 
		 			);
		 	 }

 }


export default Player;
