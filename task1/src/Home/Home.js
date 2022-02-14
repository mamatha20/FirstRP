import './Home.css'
import image from './image.jpg'

export const Home = () => {
	return (
		<div className='homepage' >

			<div className="main">
				<div class="green-box">
					<h1>Invest in the freedom to choose</h1>

					<p>
						Wealth is not just about money. It's about what all you 
						can do with it. It is having your own story of progress. 
						And living it every single day. So go ahead, imagine a 
						future you want to shape.
						</p>
						<br></br>
						<br></br>

					<p>And make it happen.</p>
					<button type="button" class="btn btn-warning" >Create Account</button>
						</div>
				{/* width={"20px"} height={"100px"} */}
				<img src={image} alt="pic" height={"900px"} />
				<div className='contain'>  Homepage</div>

			</div>
			<br /> <b> CONGRATS </b>
	



		</div>


	);
};