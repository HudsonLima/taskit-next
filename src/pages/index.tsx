import Head from 'next/head';
import { GetServerSideProps} from 'next';


import { CompletedChallenges } from "../componentes/CompletedChallenge";
import { Countdown } from "../componentes/Countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../componentes/ChallengeBox";
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (   
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >  

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
   </ChallengesProvider>
  )
}

export const getServerSiteProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
