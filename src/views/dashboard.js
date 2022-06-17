import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import DashboardS1 from "../components/dashboard-s1";

class Dashboard extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <DashboardS1/>
            </Container>    
        );
    }
}

export default Dashboard;