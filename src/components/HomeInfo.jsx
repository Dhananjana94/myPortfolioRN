import React from 'react'
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) =>(
    // sm for smaller screen
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className=" w-4 h-4 object-contain"/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        //adjust text area to match small screen also
        <h2 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8
        text-white mx-5">
            Hi, I am <span className="font-semibold">Nadun</span> 🫡
            <br/>
            A software developer from Sri Lanka
        </h2>
    ),
    2: (
        <InfoBox
        text="worked with diffrent technologies and picked up many skills along the way"
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
        text="Successfully done numerous projects over the years. Interested in learning about the outcomes?"
        link="/projects"
        btnText="Visit my projects"
        />
    ),
    4: (
        <InfoBox
        text="Any questions or need further information,please don't hesitate to reach out to me"
        link="/contact"
        btnText="Let's talk"
        />
    )
}



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo