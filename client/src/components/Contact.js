import React,{useState,useEffect} from 'react'

const Contact = () => {

    const [userData,setUserData] = useState({name:"",email:"",phone:"",message:""});

	const callContact = async () => {
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
			setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
			
			if(!res.status === 200){
				const error = new Error(res.error);
				throw error;
			}

		}catch(err){
			console.log(err);

		}
	}

	useEffect(() => {
		callContact();
	}, []);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData,[name]: value})
    }
    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;
        const res = await fetch("/contact",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,message
            })
        });

        const data = await res.json();
        console.log(data);


        if(!data || res.status === 400 ){
            window.alert("message not found")
            console.log("message not found");
        }else{
            alert("message send")
            setUserData({...userData,message:""});
            console.log(userData);
        }

    }

    return (
        <div>
            <div className="contact_info mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

                            <div className="contact-info-item d-flex justify-content-start align-item-center">
                                <div className="contact_info_title">
                                    phone :
                                </div>
                                <div className="contact_info_text">
                                   &nbsp; 123456789
                                </div>
                            </div>

                            <div className="contact-info-item d-flex justify-content-start align-item-center">
                                <div className="contact_info_title">
                                    email :
                                </div>
                                <div className="contact_info_text">
                                   &nbsp; demo@gmail.com
                                </div>
                            </div>

                            <div className="contact-info-item d-flex justify-content-start align-item-center">
                                <div className="contact_info_title">
                                    address :
                                </div>
                                <div className="contact_info_text">
                                   &nbsp; Ahmedabad,india
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact-form-container py-5">
                                <div className="contact-form-title">
                                    Get in Touch
                                </div>
                            <form id="contact-form" method="POST">
                                <div className="contact-form-name d-flex justify-content-between align-items-between">

                                    <input type="text" id="contact_form_name" className="contact_form_name input_fields" name="name" onChange={handleInput}  value={userData.name}  placeholder="Your Name" required="true" />

                                    <input type="email" id="contact_form_email" className="contact_form_email input_fields" name="email" onChange={handleInput} value={userData.email} placeholder="Your email" required="true" />

                                    <input type="number" id="contact_form_phone" className="contact_form_phone input_fields" name="phone" onChange={handleInput} value={userData.phone} placeholder="Your Number" required="true" />

                                </div>

                                <div className="contact_form_text mt-5">
                                    <textarea className="text_field contact_form_message" name="message" value={userData.message} onChange={handleInput} placeholder="Message" cols="30" rows="10"></textarea>
                                </div>

                                <div className="contact_form_button">
                                    <button type="submit" onClick={contactForm}  className="button btn btn-dark contact_submit_button">Send Message</button>
                                </div>
                            </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
