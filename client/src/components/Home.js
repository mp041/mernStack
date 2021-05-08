import React,{useState,useEffect} from 'react'
import '../App.css'


const Home = () => {
    const [userName,setUserName] = useState('');
    const [show ,setShow] = useState(false);

	const callHomepage = async () => {
		try{
			const res = await fetch('/getdata',{

				method:"GET",
				headers: {
					
					"Content-Type": "application/json"
				},
			
				
			});
			// console.log("hii");

			const data = await res.json();
			// console.log(data);
			setUserName(data.name);
			setShow(true)
		
		}catch(err){
			console.log(err);

		}
	}

	useEffect(() => {
		callHomepage();
	}, []);



    return (
        <div className="home">
            <h1>welcome {userName} </h1>
            <h6>{show ? 'You Are the Mern Developer' : 'Welcome to My Page!' }</h6>
        </div>
    )
}

export default Home;
