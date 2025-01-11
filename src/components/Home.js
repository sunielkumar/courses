import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const navigateToCourses = () => {
        navigate('/')

    }
    return (
        <div>
            <Row gutter={[16, 16]} justify='center'>
                <Col lg={18} xs={18} span={24}>
<Typography.Title level={3}>Courses</Typography.Title>
                    <Button type='primary' onClick={navigateToCourses} >Courses</Button>
                </Col>
            </Row>

        </div>
    )
}

export default Home