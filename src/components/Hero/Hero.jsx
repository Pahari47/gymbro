import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { Link } from "react-scroll"
import CountUp from 'react-countup';

import { motion } from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: '188px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best fitness club in DGP</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            in here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span><CountUp start={0} end={140} duration={5} prefix='+' /></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span><CountUp start={0} end={978} duration={5} prefix='+' /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><CountUp start={0} end={50} duration={5} prefix='+' /></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero buttons */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>

            </div>
            <div className="right-h">
                <button className="btn">
                    <Link
                    to='join-us'
                    span={true}
                    smooth={true}
                    >Join Now</Link>
                </button>

                <motion.div
                initial={{right: "-1rem"}}
                whileInView={{right: "4rem"}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero images */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className='hero-image-back' />
                {/* calories */}
                <motion.div 
                initial={{right: "37rem"}}
                whileInView={{right: "28rem"}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>229 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
