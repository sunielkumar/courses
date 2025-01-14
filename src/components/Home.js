import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SiCoursera } from "react-icons/si";

const Home = () => {
    const navigate = useNavigate();

    const navigateToCourses = () => {
        navigate('/courses')

    }
    return (
        <div>
            <Row gutter={[16, 16]} justify='center'>
                <Col lg={18} xs={18} span={24}>
                    <Typography.Title level={1}>Home Page Sample</Typography.Title>
                    <Button type='primary' icon={<SiCoursera/>} onClick={navigateToCourses} >Courses</Button>
                </Col>
            </Row>

        </div>
    )
}

export default Home