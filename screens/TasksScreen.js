import React,{ Fragment} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ActionBar from "../components/ActionBar";
import TaskTabs from '../Utils/TaskTabNavigator'

export default class TaskScreen extends React.Component{
  openDrawer = () => {
    this.props.navigation.openDrawer()
  }

  render(){
    return(
        <Fragment>
          <ActionBar navigation={this.props.navigation} name="Tasks" />
          <TaskTabs />
        </Fragment>
    )
  }
}