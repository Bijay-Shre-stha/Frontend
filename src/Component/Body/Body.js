import React from 'react';
import './Body.css';
import Academic from '../Academic/Academic';
import Club from '../Clubs/Club';

const Body = (props) => {
    const isDarkMode = props.mode === 'dark';

    return (
        <div className={`container mt-5 p-2 ${isDarkMode ? 'dark-mode' : ''}`}>
            <section className='wrapper'>
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </section>
            <div className={`card text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? 'dark' : 'light'} mb-3`}>
                <div className={`card-body text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? 'dark' : 'light'}`}>
                    <h2 className={`card-title text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? 'dark' : 'light'}`}>What's DOKO?</h2>
                    <p className={`card-text text-${isDarkMode ? 'light' : 'dark'} bg-${isDarkMode ? 'dark' : 'light'}`}>
                        Doko is (Nepali: डोको) is a Nepali word for a bamboo basket. These kinds of baskets are popular all across the country to carry stuff.
                        The idea behind this project was to create a one-stop portal for all the students of DWIT. The portal would contain all the necessary information that a student
                        would require during their four years of bachelor's program. The portal would also contain the profiles of all the students who have
                        studied or are studying at DWIT. The profiles would contain the information about the students, their academic performance, and their
                        achievements. The portal would also contain the information about the clubs and the activities that they have conducted. The portal
                        would also contain the information about the college and university forms that the students would require to fill during their four
                        years of bachelor's program. The portal would also contain the past papers of both college and university exams. The portal would
                        also contain the information about the events that the college has conducted. The portal would also contain the information about
                        the community and society that the college has been involved in.
                    </p>
                </div>
            </div>
        <hr className={`line 
            ${isDarkMode ? 'dark-line' : 'light-line'}`} 
        />
            <Academic />

            <hr className={`line 
            ${isDarkMode ? 'dark-line' : 'light-line'}`} 
        />
            <Club/>
        </div>
    );
};

export default Body;
