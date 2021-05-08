import React,{useEffect,useState} from 'react'
import logo from '../images/logo.png';
import pic from '../images/pic.png';
import {useHistory} from "react-router-dom";


const About = () => {
	const history = useHistory();
	const [userData,setUserData] = useState({});

	const callAboutPage = async () => {
		try{
			const res = await fetch('/about',{

				method:"GET",
				headers: {
					Accept : "application/json",
					"Content-Type": "application/json"
				},
				credentials:"include"
				
			});
			// console.log("hii");

			const data = await res.json();
			// console.log(data);
			setUserData(data);
			
			if(!res.status === 200){
				const error = new Error(res.error);
				throw error;
			}

		}catch(err){
			console.log(err);
			history.push('/login')
		}
	}

	useEffect(() => {
		callAboutPage();
	}, []);

    return (
        <>
            <div>
          <h2>About Me</h2>

	<div id="myCarousel" class="carousel slide" data-ride="carousel">
		<form action="GET">
			
<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   

	<div class="carousel-inner">		
		<div class="carousel-item active">
			<div class="img-box"><img src={pic} alt=""/></div>
			<p class="testimonial">I am a B.tech IT student at GIT Gandhinagar.</p>
			<p class="overview"><b>{userData.name}</b>{userData.work} <a href="#">GIT</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			<div class="img-box"><img src={logo} alt=""/></div>
			<p class="testimonial">I am intrested in MERN stack development.I have worked in technologies like Reactjs ,Nodejs,Express js,Mongo DB</p>
			<p class="overview"><b>Mihir Panchal</b>{userData.email} <a href="#">NIT jamshedpur</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			{/* <div class="img-box"><img src={} alt=""/></div> */}
			<p class="testimonial">I am currently pursuing btech 4 year Btech degree</p>
			<p class="overview"><b>Mihir Panchal</b>{userData.phone}<a href="#">Web Team</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i class="fa fa-angle-left"></i>
	</a>
	<a class="carousel-control-next" href="#myCarousel" data-slide="next">
		<i class="fa fa-angle-right"></i>
	</a>
		</form>
	</div>

        </div>
    )

        </>
    )}

export default About;










