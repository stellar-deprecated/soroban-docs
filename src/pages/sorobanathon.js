import React from 'react'
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout'
import clsx from 'clsx'

import './sorobanathon.scss'

export default function Sorobanathon() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content=""
        />
        <meta
          property="og:description"
          content=""
        />
        <meta
          name="twitter:description"
          content=""
        />
      </Head>

      <main className='sorobanathon'>
        <div className="hp--hero">
          <img className='hp--topRight' src="./img/homepage/top-right.svg" />
          <img className='hp--bottomLeft' src="./img/homepage/bottom-left.svg" />

          <div className="hp--heroInfo hp--maxWidth">
            <img className='hp--arrows' src="./img/homepage/arrows.svg" />
            <h1 className="hp--h1">Sorobanathon: Equinox 🌖</h1>
          </div>
        </div>

        <div className='hp--maxWidth'>
          <div className='hp--content'>
            <h1>Welcome to Sorobanathon: Equinox<br/>February 3rd - April 1st, 2023.</h1>
            <p>Sorobanathon is back for the new year! Once again, you can earn rewards by experimenting with Soroban and creating content to share your experience. We are looking for any kind of content, big or small!</p>
            <p><strong>Our goals</strong> with Sorobanathon: Equinox are to continue gathering feedback that will guide the development of Soroban, and more importantly, to generate content that will help kickstart the Soroban ecosystem. So roll up your sleeves, experiment, and have some fun!</p>
            <p>During First Light, we received a ton of requests to increase the reward band to allow for more extensive projects… and we are happy to announce that in Sorobanathon: Equinox, you can earn up to from 25 all the way to up to 10,000 XLM for a single submission! This is a fun, low-lift way to tinker with Soroban while you help shape its development and grow the ecosystem as a whole.</p>
          </div>

          <div className='hp--content'>
            <h2>Here are the kind of submissions we're looking for:</h2>
            <ul>
              <li>Code examples (<a href="https://sorobandev.com/">sorobandev.com</a>)</li>
              <li>Practical tutorials (such as this Game betting contract)</li>
              <li>Fun dapp tutorials (such as this adoption tracking system for a pet shop)</li>
              <li>Video walkthroughs (such as this one on Stellar Quest)</li>
              <li>Soroban for X developer tutorials (X = another smart contracts platform, such as Ethereum, Near, or Solana)</li>
            </ul>
            <p>Also, if you're trying to do something and it doesn't work, let us know!  File a good issue and/or document your experience in some way, and turn that in!  Soroban is still a work in progress, and info about issues, bugs, and blockers is super useful right now.</p>
            <p>You can file new issues (and see existing issues) in the  Soroban CLI repo or the Soroban SDK repo.  If you do file an issue, make sure to link to it in your Sorobanathon: Equinox submission.  If you have questions, feel free to ask them in the Stellar Dev Discord #soroban-help channel</p>
          </div>

          <div className='hp--content'>
            <h2>Get Started</h2>
            <p>If you haven't already, check out the Soroban docs to get oriented, get set up, and get your head around the Soroban fundamentals. When you're ready to create a submission, we encourage you to post your submission on dev.to. However, it is up to you where you choose to post your submission. Our only ask, if the platform you are using allows for hashtags, make sure to tag it with #soroban, and #sorobanathon.</p>

            <h2>How to make a submission on dev.to.</h2>
            <div className='hp--scrollBox'>
              <h2>Sign Up</h2>
              <p>If you don't already have an account on DEV.to, you'll need one to post. Sign Up Here</p>
              <h2>Click "Create a Post"</h2>
              <p>Once you sign in, there will be a button in the upper right corner that says "Create a Post" - click it!</p>
              <h2>Pick a Good, Descriptive Title</h2>
              <p>Tell the readers exactly what they will get from the post, and then deliver on that promise.</p>
            </div>

            <p>Once you have made your post and have a link to your published, public, live post…</p>
            <ul>
              <li>Head on over to the Stellar Dev Discord.</li>
              <li>Find the sorobanathon-submission forum</li>
              <li>Click “New Post”</li>
              <li>Title it the same as your submission</li>
              <li>Add in a line of description about your submission</li>
              <li>Add the link to your submission</li>
              <li>And then click “Post”</li>
              <li>Once you have posted, you are done!</li>
            </ul>
            <p>We will review your submission within a week, and reply on your submission thread to let you know if your submission qualifies to earn a reward! If so, we will ask you to complete a form to collect info necessary to validate and deliver a reward.</p>
            <p>If your submission does not qualify, we may provide you with feedback on what's missing, or on how you can improve your submission so it qualifies. Once you have made the requested revisions, we will re-review your submission, and let you know if your submission qualifies for a reward.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}