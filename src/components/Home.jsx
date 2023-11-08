import React from 'react'
import { render } from 'react-dom'
import Video from './Video';
import AboutSection from './aboutH';
import ServHome from './servHome';
import TeamHome from './TeamHome';

function Home() {
       return (
         <>
            <Video/>
            <AboutSection />
            <ServHome/>
            <TeamHome/>
         </>
       );
}

export default Home