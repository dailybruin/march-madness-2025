import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';


const Container = styled.div`
	background-color: #9BBDF4;
	height: auto;
	color: white;
	padding: 60px 0 10px 0;
    text-align: center;
	h1 {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
	}
  /* margin-bottom: 20px; */
`

const Socials = styled.div`
    position: relative;
	margin-top: 20px;
  
	img {

    position: relative;
		margin: 0 20px;
	}
	p {
    position: relative;
		margin: 80px 20px;
		${mediaQueries.mobile} {
			margin: 50px 20px;
		}
	}
`

const Footer = () => {
    return (
        <Container>
        <h1 style={{ color: "#593012" }}>DAILY BRUIN</h1>
        <Socials>
          <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer"><img src={insta} alt=""/></a>
          <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer"><img src={fb} alt=""/></a>
          <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer"><img src={twitter} alt=""/></a>
          <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer"><img src={tiktok} alt=""/></a>
          <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer"><img src={email} alt=""/></a>
          <p style={{ color: "#593012" }}>Built with Suzy’s ♥ in Kerckhoff 118 by Kirsten Reign Cabalonga, Evelyn Cho, Jennifer Lee, Henry Nguyen and Sakshi Thoutireddy. Designed by Vienna Vipond.</p>
        </Socials>
    </Container>
    )
  }
  
export default Footer;