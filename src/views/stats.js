import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import StatsS1 from "../components/stats-s1";
import StatsS2 from "../components/stats-s2";

class Stats extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <StatsS1/>
                <StatsS2/>
            </Container>    
        );
    }
}

export default Stats;