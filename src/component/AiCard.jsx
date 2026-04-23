// 'use client'
import { Avatar, Card } from "@heroui/react";


const AiCard = ({ ai }) => {
    console.log(ai)
    const { title, description, price } = ai;

    return (
        <div>
            <Card className=" p-4 m-2">

                <Card.Header>
                    <Card.Title>{title} </Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Header>
                <Card.Footer className="flex gap-2">

                    <span className="text-xs">{price} </span>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default AiCard;