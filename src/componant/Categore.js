import { Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import "./app.css"
import item from "./data";
const Categore=({filterData,allCategore})=>{
    const doclick =(cat)=>{
        filterData(cat)
        
    }

    return(
        <Row className="my-4 " >
            <Zoom>
            <Col sm="12" className="d-flex justify-content-center">
                {
                    allCategore.length>1 ?(allCategore.map((item)=>{
                        return(
                            <button  onClick={()=>doclick(item)} className="mx-3 btn">{item}</button>
                        )
                    })):null
                }

                
         
            </Col>
            </Zoom>
        </Row>
    )
}
export default Categore