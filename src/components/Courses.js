import React, { useState } from "react";
import { Row, Col, Typography } from "antd";

import Cards from "./Cards";


const Courses = () => {
    const [activeCard, setActiveCard] = useState(1);

    const cards = [
        {
            id: 1,
            number: "23",
            title: "All Courses",
            description: "courses you're powering through right now.",
        },

        {
            id: 2,
            number: "05",
            title: "Upcoming Courses",
            description: "exciting new courses waiting to boost your skills.",
        },
        {
            id: 3,
            number: "10",
            title: "Ongoing Courses",
            description: "currently happening—don’t miss out on the action!",
        },
    ];

    const handleCardClick = (id) => {
        setActiveCard(id);
    };

    return (
        <Row gutter={[16, 16]} style={{ margin: '35px 0px' }}  justify='center'>
            <Col lg={20} xs={20} span={24}>
 
                        <Typography.Title level={4}>
                            Explore Our Classes and master trending skills!
                        </Typography.Title>
                        <Typography.Title level={2} style={{ color: "#2B2B2B", margin: "10px 0" }}>
                            Dive Into <span style={{ color: "#1DA077" }}>What's Hot Right Now! 🔥</span>
                        </Typography.Title>

               


                <Row gutter={[16, 16]}   style={{ marginTop: 60 }} >
                    {cards.map((card) => (
                        <Col
                            key={card.id}
                            // span={card.id === activeCard ? 12 : 6}
                            // xs={activeCard ? 12 : 6} sm={activeCard ? 12 : 6} md={activeCard ? 12 : 6} lg={activeCard ? 12 : 6}
                            // style={{
                            //     display: "flex",
                            //     justifyContent: "center",
                            // }}
                        >
                            <Cards
                                card={card}
                                isActive={card.id === activeCard}
                                onClick={() => handleCardClick(card.id)}
                            />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default Courses;
