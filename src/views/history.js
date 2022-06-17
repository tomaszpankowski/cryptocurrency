import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import HistoryS1 from "../components/history-s1";
import HistoryS2 from "../components/history-s2";

class History extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <HistoryS1/>
                <HistoryS2/>
            </Container>    
        );
    }
}

export default History;