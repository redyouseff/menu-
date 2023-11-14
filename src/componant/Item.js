import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import "./app.css"
import item from "./data";
const Item=({data})=>{
  
    return(
       <Row>
        {
            data.length>=1 ?(data.map((item)=>{
                return(
                    <Col sm="12">
                       <Zoom >
                    <Card key={data.id} className="d-flex flex-row my-3 card">
                    <Card.Img className="im" variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between">
                      <div>{item.title}</div>
                      <div className="price">{item.price}</div>
                        </Card.Title>
                      <Card.Text className="p-2">
                        <div>{item.description}</div>
                      </Card.Text>
                    </Card.Body>
                    
                  </Card>
                  </Zoom>
                  </Col>
                )

            })):null
        }
       </Row>
       

    )
}
export default Item