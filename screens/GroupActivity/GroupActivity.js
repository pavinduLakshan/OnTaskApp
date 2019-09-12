import React, { Fragment } from "react";
import { Text } from "react-native";
import axios from 'axios'
import ActionBar from "../../components/ActionBar";
import ActivityItem from './ActivityItem'

export default class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    const gid = this.props.navigation.getParam("id", " ");
    this.state={
      activities: [],
      gid: gid
    }
  }
  
  componentDidMount(){
    axios.get('/groups/'+ this.state.gid+'/activity').then(
      res => this.setState({activities: res.data})
    ).catch(err => console.log(err))
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      axios.get('/groups/'+ this.state.gid+'/activity').then(
        res => this.setState({activities: res.data})
      ).catch(err => console.log(err))
    }
  }

  render() {

    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Group Activity" />
        <Text
          onPress={() =>
            this.props.navigation.navigate("Group", {
              id: this.state.gid,
            })
          }
        >
          Return to group
        </Text>
        {this.state.activities.map( activity => 
          <ActivityItem 
            key={activity.id}
            description={activity.description}
            createdAt={activity.createdAt}
          />)}
      </Fragment>
    );
  }
}
