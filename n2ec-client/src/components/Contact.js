import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Contact = () => (
    <div style={{margin: '0 auto', minHeight: '100vh'}}>
        <MainCard />
    </div>
)

export default Contact

// on contact page if you're interested in working with us send us a message and submit a resume

// toll free number 885-ask-n2ec


// One contact Nick's name and email

// Another contact box Nate's name and email


const MainCard = () => (
    <Card style={{marginTop: '4em'}}>
        <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        {/* <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia> */}
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
)