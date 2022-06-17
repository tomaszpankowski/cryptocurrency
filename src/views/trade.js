import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import TradeS1 from "../components/trade-s1";
import TradeS2 from "../components/trade-s2";

class Trade extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <TradeS1/>
                <TradeS2/>
            </Container>    
        );
    }
}

export default Trade;