import React from 'react'
import { render } from 'react-dom'
import Video from './Video';
import AboutSection from './aboutH';
import ServHome from './servHome';
import TeamHome from './TeamHome';
import Faq from './Faq';

function Home() {
       return (
         <>
            <Video/>
            <AboutSection />
            <ServHome/>
            <TeamHome/>
            <Faq/>
         </>
       );
}

export default Home