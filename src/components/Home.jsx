import React from 'react'
import { render } from 'react-dom'
import Video from './HomeComp/Video';
import AboutSection from './HomeComp/aboutH';
import ServHome from './HomeComp/servHome';
import TeamHome from './HomeComp/TeamHome';
import Faq from './HomeComp/Faq';

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