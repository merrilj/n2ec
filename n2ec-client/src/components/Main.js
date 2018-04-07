import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Main = () => (
    <div>
        <Logo />
        <Card style={{width: '90%', margin: '0 auto', marginBottom: '2em'}}>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      {/* <FlatButton label="Action1" /> */}
      {/* <FlatButton label="Action2" /> */}
    </CardActions>
  </Card>
    </div>
)

const Logo = () => (
    <div style={styles.logoDiv}>
        <img src={require('../images/n2ec-logo.png')} style={styles.logo} alt='N2 logo' />
    </div>
)

export default Main

const styles = {
    logoDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: '50%',
        width: '50%'
    }
}