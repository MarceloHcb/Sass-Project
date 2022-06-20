import styled from "styled-components"
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import "../sass/styles.sass"
const Galery = () =>{
    return(<>
    <Div>    
        <Header></Header>
        <Main></Main>
 
    </Div>    

    </>)
}
const Div = styled("div")`
    width: 100%;
    height:100vh;    
`

export default Galery