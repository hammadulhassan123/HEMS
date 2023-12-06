import React from 'react'
import { render } from 'react-dom'
import Video from './HomeComp/Video';
import AboutSection from './HomeComp/aboutH';
import ServHome from './HomeComp/servHome';
import TeamHome from './HomeComp/TeamHome';
import Faq from './HomeComp/Faq';
import { Route, Routes } from 'react-router-dom';
import UserHome from './Dashboard/userHome';

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