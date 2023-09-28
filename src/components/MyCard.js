import MyButton from "./MyButton";
import {Card} from "react-bootstrap";
import "./MyCard.css";

function MyCard({ count, handleReset, handleIncrement, handleDecrement }) {
    return (
        <Card className="my-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Counter</Card.Title>
                <Card.Text>
                    { count }
                </Card.Text>
                <MyButton variant="secondary" onClick={handleReset}>Reset</MyButton>
            </Card.Body>
        </Card>
    );
}

export default MyCard;