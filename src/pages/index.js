import React from 'react'
import Layout from '@theme/Layout'
import clsx from 'clsx'

import './index.scss'

export default function Home() {
  return (
    <Layout>
      <main className='homepage'>
        <div className="hp--hero">
          <img className='hp--topRight' src="./img/homepage/top-right.svg" />
          <img className='hp--bottomLeft' src="./img/homepage/bottom-left.svg" />

          <div className="hp--heroInfo hp--maxWidth">
            <img className='hp--logo' src="./img/homepage/soroban-white.svg" alt='Soroban' />
            <img className='hp--arrows' src="./img/homepage/arrows.svg" />
            <h1 className="hp--h1">Introducing Soroban</h1>
            <h2 className="hp--h2">Soroban is a smart contracts platform that is designed with purpose and built to perform. The futurenet has launched! Start experimenting and earning rewards now!</h2>
            <a href="/#tinker-and-earn" className='hp--button'>Tinker &amp; Earn</a>
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

        <div id="tinker-and-earn" className='hp--cta hp--maxWidth'>
          <h2>Tinker &amp; Earn Rewards</h2>
          <a href="https://github.com/stellar/sorobanathon" className='hp--imgLink'>
            <img src='./img/homepage/sorobanathon.svg' />
          </a>
          <h1>Sorobanathon: First Light</h1>
          <p>
            Between now and December 15, 2022, join <i>Sorobanathon: First Light</i>. Experiment with Soroban and submit a code example, issue, tutorial, blog post, or video documenting your experience. Qualified submissions will receive awards of 250-3,000 XLM. It's a fun, low-lift way to learn, test things out, and provide valuable feedback to both the Soroban development team and the Soroban ecosystem as a whole. Let's bootstrap this thing together!
          </p>
          <a href="https://github.com/stellar/sorobanathon" className='hp--button'>Join the Sorobanathon</a>
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
            <i>Sorobanathon: First Light</i> is the first of many programs that draws from the $100M Soroban Adoption Fund, which the Stellar Development Foundation created to support the growth and development of the Soroban ecosystem. We'll be sharing more about additional Adoption Fund programs on the Stellar Dev Discord in the not-too-distant future, so make sure to join today to be the first to hear those announcements.
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
