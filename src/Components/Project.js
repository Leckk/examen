import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import { Card,Col, CardImg, CardText, CardBody, Row,
    CardTitle, CardSubtitle, Badge,Progress, Button, Container } from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClickLike = this.handleClickLike.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            project: [],
            projectLike: [],
            isLiked: false,
        };
    }
    componentDidMount() {
        console.log(this.state.isLiked, "dans le did mount")
        var ctx = this;
        fetch('https://intense-retreat-36114.herokuapp.com/project')
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data.project)
            ctx.setState({project: data.project});
        }).catch(function(error){
            console.error(error);
        });
        };
        handleClickLike() {
            if (this.state.isLiked === false){
                console.log(this.state.isLiked , 'dans le if')
                this.setState({
                    isLiked: true
            })
        } else if (this.state.isLiked === true){
            console.log(this.state.isLiked , 'dans le else')
                this.setState({
                    isLiked: false
            })
        }
    }
    handleClick(isLiked) {
            var projectCopy = [...this.state.project];
            if (isLiked) {
            projectCopy.push(isLiked);
            this.setState({
            project: projectCopy,
            })
        }
    }
render() {
    var projectList = this.state.project.map((project, i) => {
        var isLiked = this.state.isLiked;
        return (
        <Col sm="6" xs="12" md="4">
            <Card className="mb">
                <img width="100%" className="img-card"  src={project.pic_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='titleCard'>{project.name}</CardTitle>
                    <CardSubtitle>{project.desc}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardTitle className='titleCard'>Stack front</CardTitle>
                    <Badge className='ma-thin' color="secondary">{project.stack_front[0]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_front[1]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_front[2]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_front[3]}</Badge>
                </CardBody>
                <CardBody>
                    <CardTitle className='titleCard'>Stack Back</CardTitle>
                    <Badge className='ma-thin' color="secondary">{project.stack_back[0]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_back[1]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_back[2]}</Badge>
                    <Badge className='ma-thin' color="secondary">{project.stack_back[3]}</Badge>
                    <div className="text-center">{project.days_spent}/5 days spent</div>
                    <Progress max="5" animated color="secondary" value={project.days_spent}/>
                </CardBody>
                <CardBody>
                    <Button outline color="secondary" onClick={this.handleClickLike}>+ Favorite</Button>
                </CardBody>
            </Card>
            </Col>
            )
    });
return(
    <Container>
        <Row>
        {projectList}
        </Row>
    </Container> 
        )
    }
}
function mapStateToProps(state) {
    return { isLiked: state.isLiked }
}

export default connect(
    mapStateToProps,
    null
)(Header);
