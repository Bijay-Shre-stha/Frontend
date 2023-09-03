import React from 'react'
import './Society.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Society = () => {
  return (
    <div>
      <div className="container ">
        <h1 id='head'>        
        Our Community & Society
        </h1>
        <div className="item10" data-aos="fade-up">
          <div className="clubInfo">
            <div className="clubName">
              <h1>Deerwalk Developers Community</h1>
            </div>
            <div className="clubLogo">
              <img className='clubLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyjCy4Qb9rCv9bVIxeAbFsZJYrFCdZCDo1RqiwGvrAw&s" alt="" />
            </div>
            <div className="clubDescription">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, saepe, cum molestias deserunt maiores suscipit aliquid, similique odio consequuntur reiciendis rem ad in eius nesciunt soluta voluptates minima eveniet? In.              </p>
            </div>
            <footer>
                        <div className={`clubSocialMedia `}>
                            <a href='https://www.facebook.com/dwit.softwareclub'><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/deerwalkcollege">    <FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.instagram.com/dwit_software_club/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/in/dwit-software-club-6369ba245/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </footer>
          </div>
        </div>

        <div className="item11" data-aos="fade-down">
          <div className="clubInfo">
            <div className="clubName">
              <h1>Deerwalk Data Society</h1>
            </div>
            <div className="clubLogo">
              <img className='clubLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyjCy4Qb9rCv9bVIxeAbFsZJYrFCdZCDo1RqiwGvrAw&s" alt="" />
            </div>
            <div className="clubDescription">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora alias fuga ad maxime veniam, qui blanditiis quis atque nulla est quibusdam accusantium deleniti labore cupiditate hic quam praesentium optio officia.
              </p>
            </div>
            <footer>
                        <div className={`clubSocialMedia `}>
                            <a href='https://www.facebook.com/dwit.softwareclub'><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/deerwalkcollege">    <FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.instagram.com/dwit_software_club/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/in/dwit-software-club-6369ba245/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </footer>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Society
