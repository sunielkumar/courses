import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Icon1 from '../assets/images/react.png';
import Icon2 from '../assets/images/icon2.png';
import Icon3 from '../assets/images/vue.png';
import Icon4 from '../assets/images/icon4.png';
import  '../assets/styles/card.css';


const Cards = ({ card, isActive, onClick }) => {

  const activeCardStyles = {
    scale: 1.3,
    width: "400px",
    backgroundColor: "#C33241",
    color: "white",
    height: '350px'
  };

  const inactiveCardStyles = {
    scale: 1,
    width: "240px",
    backgroundColor: "#F9EBEC",
    color: "#C33241",
    heigh: '350px'
  };

  return (
    <motion.div
      style={{
        borderRadius: 32,
        cursor: "pointer",
        overflow: "hidden",

      }}
      // animate={isActive ? activeCardStyles : inactiveCardStyles}
      onClick={() => onClick(card.id)}
    >
      <Card
        style={{
          width: isActive ? activeCardStyles?.width : inactiveCardStyles?.width,
          height: isActive ? activeCardStyles?.height : inactiveCardStyles?.heigh,
          backgroundColor: isActive
            ? activeCardStyles?.backgroundColor
            : inactiveCardStyles?.backgroundColor,
          color: isActive ? activeCardStyles?.color : inactiveCardStyles?.color,

          // position: "relative",
        }}
        hoverable

      >
        {isActive ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.8rem",
                color: "white",
              }}
            >

              View all Courses <FaArrowRight />

            </div>
            
            <Row gutter={[16, 16]} justify="space-between" style={{ marginTop: 48 }}>
              <Col><img src={Icon1} alt="React Icon" width={75} /> </Col>
              <Col><img src={Icon2} alt="Vue Icon" width={75} /></Col>
              <Col><img src={Icon3} alt="JS Icon" width={75} /></Col>
              <Col><img src={Icon4} alt="Angular Icon" width={75} /></Col>
            </Row>


            <Row gutter={[16, 16]} justify="space-between" style={{ padding: '0px 25px' }}  >
              <Col className="card-number" >
                {card?.number}
                <sup className="sup">+</sup>
              </Col>
              <Col flex="1" style={{ textAlign: "left", display: "flex", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 18, margin: 0, fontWeight: 'bold' }}>{card?.title}</div>
                  <span style={{ fontSize: 14, marginTop: 0 }}>{card?.description}</span>
                </div>
              </Col>
            </Row>



          </>
        ) : (
          // Inactive Card Content
          <>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  transform: "rotate(-90deg)",
                  display: "inline-block",

                  fontSize: 18,
                  margin: 0,
                  fontWeight: 'bold'

                }}
              >
                {card?.title}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  transform: "rotate(-90deg)",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {card?.description}
              </p>
            </div>

            <div className="card-number" style={{textAlign:'center'}}>
              {card?.number} 
              <sup style={{ fontWeight: 900, fontSize: 30 }}>+</sup>
            </div>
          </>
        )}
      </Card>
    </motion.div>
  );
};

export default Cards;
