import Head from 'next/head';

import { CompletedChallenges } from "../componentes/CompletedChallenge";
import { Countdown } from "../componentes/Countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../componentes/ChallengeBox";
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (   

   <div className={styles.container}>

     <Head>
       <title> Inicio | taskit</title>
     </Head>
        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges/>
              
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
        
   </div>
  )
}
