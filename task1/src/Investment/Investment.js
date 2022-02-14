
import { Button } from 'primereact/button';
import React from 'react';
import './Investment.css';
import child from './child.jpg';
import mutul from './mutul.jpg';

export const InvestmentMain = () => {

	return (
		<div >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Button variant="outline-secondary">Mutual Funds</Button>{' '}
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Button label="Retirement plans Fund" className="p-button-outlined p-button-success" />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Button label="Saving" className="p-button-outlined p-button-success" />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<Button label="Childs Future" className="p-button-outlined p-button-success" />

			<center> <h1>Find Mutual Funds By Category</h1> </center>








			<div className="card">
				<div className="flex flex-wrap md:justify-content-between justify-content-top 
				card-container-gray">

					 <div className="text-black-500 hover:text-orange-700 w-25rem 
					 h-25rem surface-overlay border-round border-1 border-gray-500 
					 font-bold m-12 flex align-items-top justify-content-right">
						<h1>Mutual Fund is an investment product. It is started and managed by a Mutual Fund company that 
							pools money from various investors and invests it in various asset classes like equities,
							 bonds, money market instruments, and Gold.</h1 >
						</div>
					
				<img src={child} alt="pic" height={"400px"} width={"400px"}   />
				<img src={mutul} alt="pic" height={"390px"} width={"340px"}   />
			

				</div>
			</div>
			




			<div className="card">
				<div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
					<div className="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
         font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">fadeinleft</div>
				</div>
			</div>
			<React.Fragment>

			</React.Fragment>





		</div>


	)
};