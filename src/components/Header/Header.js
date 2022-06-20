import styled from "styled-components"
import { FaFacebookSquare,FaYoutube,FaTwitter, FaInstagram  } from "react-icons/fa"
export const Header = () =>{
    return(<>
    <HeaderStyled className="header">
        <A href="" className="header-brands"> Gallery </A>
        <Nav className="header-navbar">
            <Ul>
        <li>
            <a href="#" className="active">Home</a>
        </li>
        <li> 
            <a href="#">Photos</a>
        </li>
        <li> 
            <a href="#">Services</a>
        </li>
        <li> 
            <a href="#">About</a>
        </li>
        <li> 
            <a href="#">Contact</a>
        </li>
        </Ul>
        </Nav>
        <SocialMedia className="header-social-media">
            <ul>
                
            <li>
                    <a> 
                        <FaFacebookSquare/>
                    </a>
                </li>
                <li>
                    <a> 
                        <FaTwitter/>
                    </a>
                </li>
                <li>
                    <a> 
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a> 
                        <FaYoutube/>
                    </a>
                </li>
            </ul>
        </SocialMedia>
            
       
    </HeaderStyled>
    
    </>)
}
const HeaderStyled = styled("header")`
display:flex;
justify-content:space-between;
`
const A = styled("a")`
`
const Nav = styled("nav")`
`
const Ul = styled("ul")`
`
const SocialMedia = styled("div")`
`