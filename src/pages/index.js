import React from 'react'
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout'
import clsx from 'clsx'

import './index.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          property="og:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
        <meta
          name="twitter:description"
          content="Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!"
        />
      </Head>
      
      <main className='homepage'>
        <div className="hp--hero">
          <img className='hp--topRight' src="./img/homepage/top-right.svg" />
          <img className='hp--bottomLeft' src="./img/homepage/bottom-left.svg" />

          <div className="hp--heroInfo hp--maxWidth">
            <img className='hp--logo' src="./img/homepage/soroban-white.svg" alt='Soroban' />
            <img className='hp--arrows' src="./img/homepage/arrows.svg" />
            <h1 className="hp--h1">Introducing Soroban</h1>
            <h2 className="hp--h2">Soroban is a smart contracts platform that is designed with purpose and built to perform. The Futurenet has launched! Start experimenting now!</h2>
            <a href="/#build-and-earn-rewards" className='hp--button'>Build &amp; Earn Rewards</a>
            <a href="/docs" className='hp--button button--gray'>Docs</a>
          </div>
        </div>

        <div className='hp--designedFor hp--maxWidth'>
          <h1>Designed For</h1>

          <div className='hp--features'>
            <div className='hp--muchExcite orange'>
              <div className="hp--front">
                <img src="./img/homepage/battery.svg" />
                <p>Batteries-Included Developer Experience</p>
              </div>

              <ul className="hp--back">
                <li>A local sandbox for fast setup and iterative development</li>
                <li>Plug-and-play SDKs for simple and complex authorization</li>
                <li>Flexibility to reuse common functionality between contracts and access to built-in/out-of-the box contracts</li>
                <li>Written in Rust from end-to-end, for Rust developers, which taps into a growing ecosystem of safe and efficient tooling</li>
              </ul>
            </div>

            <div className='hp--muchExcite white'>
              <div className="hp--front">
                <img src="./img/homepage/scale.svg" />
                <p>Scale</p>
              </div>

              <ul className="hp--back">
                <li>Transaction footprints allow scaling to multiple cores</li>
                <li>Contracts without deserialization / serialization loops</li>
                <li>A calibrated fee model that represents compute and maximizes throughput while reducing cost</li>
                <li>Solving state bloat: the elephant in the room</li>
              </ul>
            </div>

            <div className='hp--muchExcite red'>
              <div className="hp--front">
                <img src="./img/homepage/railroad.svg" />
                <p>Access to Financial Rails via Stellar</p>
              </div>

              <ul className="hp--back">
                <li>Stellar speed and reliability – with 5 seconds to finality per contract</li>
                <li>On a proven  network that has been live since 2015 and is processing 150 tps as we speak</li>
                <li>A global anchor network of on/off ramps and assets, including worldwide cash access</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="build-and-earn-rewards" className='hp--cta hp--maxWidth'>
          <h2>Build & Earn Rewards</h2>
          <a href="https://share.hsforms.com/1U3FFLQBPQzCLKtv1vS8T-Q4u978" className='hp--imgLink'>
            <img src='./img/homepage/sorobanathon.svg' />
          </a>
          <h1>Soroban Adoption Fund</h1>
          <p>
          The $100 million Soroban Adoption Fund is a series of SDF-organized programs aiming to accelerate Soroban’s adoption. (<a href="https://soroban.stellar.org/sorobanathon">Sorobanathon: Equinox</a>) is now live and will be accepting submissions until April 1st, 2023. Earn rewards by experimenting with Soroban and creating content to share your experience. 
          </p>
          <p>To receive additional information on the Soroban Adoption Fund programs as they roll out, please complete the Soroban Adoption Fund interest form.</p>
          <a href="https://share.hsforms.com/1U3FFLQBPQzCLKtv1vS8T-Q4u978" className='hp--button'>Fill out the Form</a>
        </div>

        <div className='hp--cta hp--maxWidth'>
          <h2>
            Connect with developers, <br />
            be the first to get updates
          </h2>
          <a href="https://discord.gg/6ZCcYqbC96" className='hp--imgLink'>
            <img src='./img/homepage/discord.svg' />
          </a>
          <h1>Join the Discord</h1>
          <p>
            Our lively Discord server is the place to interact with the vibrant community of Soroban developers, stay on top of important announcements, and share your feedback about Soroban.  
          </p>
          <a href="https://discord.gg/6ZCcYqbC96" className='hp--button'>Join the Discord</a>
        </div>

        <div className='bp--startYourJourney'>
          <img className='hp--topRight' src="./img/homepage/top-right.svg" />
          <img className='hp--arrows' src="./img/homepage/arrows.svg" />

          <div className='hp--cta hp--maxWidth'>
            <h1>Start your Journey</h1>
            <p>
              Get set up, see tutorials and examples, <br/> and read more about the nuts and bolts of Soroban.
            </p>
            <a href="/docs" className='hp--button'>Read the Docs</a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
