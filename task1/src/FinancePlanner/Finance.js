import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass/';
import React, { useRef } from 'react';

import Finance from "./Finance.css";

export const FinanceMain = () => {
	const toggleBtnRef = useRef(null);
	return (

		<div className='FinanceMain' >
			<div className="main">

				<div class="box-yellow">
					<h1>What Is a Financial Plan, and How you Can Make One?</h1>
					<p>
						A financial plan creates a roadmap for your money and helps you achieve your goals.
						Financial planning can be done on your own or with a professional.
					</p><br></br>
					<p>And make it happen.</p>
					<button>Explore Mutual Funds</button>
					<h6>Read about more</h6>
					<br></br>

					<br></br>			
					<StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
						<Button ref={toggleBtnRef} label="View all Mutual Funds Companies" />
					</StyleClass>
					

				</div>
				<div className="tabs-content slide0">
					<img width="998" height="660" loading="lazy" src="https://img.smartspends.com/static/images/landing/home-page/goal-1.jpg"
						alt="Possibilities" /></div>

				<div class="tabs-content slide1">
					<img width="988" height="660" loading="lazy" src="https://img.smartspends.com/static/images/landing/home-page/goal-4.jpg"
						alt="Possibilities" />
				</div>

				<div class="tabBox">
					<img width="988" height="660" loading="lazy" src="https://img.smartspends.com/static/images/landing/home-page/goal-6.jpg" alt="Possibilities" />
				</div>



			</div>
		</div>

	)
};



