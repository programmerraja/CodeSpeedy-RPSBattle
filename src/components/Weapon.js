import React  from 'react';
import "./Weapon.css";

import rock from "./img/rock.png";

import paper from "./img/paper.png";

import scissor from "./img/scissor.png";

class Weapon extends React.Component
{
	constructor(props) 
	{ 
		super(props); 
	}
	
	render() {
		let imgsrc;
		if(this.props.weapon_name==="rock")
		{
			imgsrc=rock;
		}
		else if(this.props.weapon_name==="paper")
		{
			imgsrc=paper;
		}
		else
		{
			imgsrc=scissor;
		}
			return(
		 				<div className={this.props.weapon_name} onClick={()=>{this.props.clicked(this.props.weapon_name)}}>
		 					<img src={imgsrc} alt="weapon" />
		 				</div>
		 		)
		 	}
 
 }


export default Weapon;
