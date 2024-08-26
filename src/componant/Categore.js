import { Col, Row } from "react-bootstrap";

import "./app.css"
import item from "./data";
const Categore=({filterData,allCategore})=>{
    const doclick =(cat)=>{
        filterData(cat)
        
    }

    return(
        <Row className="my-4 " >
           
            <Col sm="12" className="d-flex justify-content-center">
                {
                    allCategore.length>1 ?(allCategore.map((item)=>{
                        return(
                            <button  onClick={()=>doclick(item)} className="mx-3 btn">{item}</button>
                        )
                    })):null
                }

                
         
            </Col>
          
        </Row>
    )
}
export default Categore