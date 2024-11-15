import React, { useState } from 'react'
import Select,{components} from 'react-select';
import { Row, Col } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';

const ContactForm = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        heardus: ''
    }
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const options = [
        { value: 'socialmedia', label: 'Instagram or other social medias' },
        { value: 'searchengine', label: 'Google or other search engines' },
        { value: 'others', label: 'Others' },
    ];

    const DropdownIndicator = (props) => {
        return (
          <components.DropdownIndicator {...props}>
            <FaChevronDown color="white" /> {/* Change color of chevron here */}
          </components.DropdownIndicator>
        );
      };

    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        placeholder: (base) => ({
            ...base,
            color: 'white', 
          }),
          singleValue: (base) => ({
            ...base,
            color: 'white', 
          }),
        control: (base) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            fontSize : '1rem'
            }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? 'DE6EA9' : '#614E9D',
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#614E9D',
            borderRadius : '10px'
        }),
    };


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1 contact-btn">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button className="hustlebutton" type="submit"><span>{buttonText}</span></button>
                    </Col>
                    <Col size={12} sm={6} className="px-1 contact-btn">
                        {/* <select className='custom-select' type='select' value={formDetails.heardus} placeholder="You heard about us from:" onChange={(e) => onFormUpdate('heardus', e.target.value)} >
                            <option value="" disabled>Select an option</option>
                            <option value="instagram">Instagram</option>
                            <option value="searchengine">Google or other search engines</option>
                            <option value="others">Others</option>
                        </select> */}
                        <Select
                            value={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            styles={customStyles}
                            components={{DropdownIndicator}}
                            placeholder="Where did you hear about us"
                        />
                    </Col>
                    {
                        status.message &&
                        <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
            </form>
        </div>
    )
}

export default ContactForm