import React, { Fragment } from "react";
import { View } from "react-native";
import { Button, Text } from 'native-base';
import TaskItem from './TaskItem'
import ActionBar from "../../components/ActionBar";
import CreateTaskModal from './CreateTaskModal'
import axios from 'axios'

export default class TaskScreen extends React.Component {
 constructor(props) {
   super(props);
   const gid = this.props.navigation.getParam("id", " ");
   this.state={
    tasks: [],
    gid: gid
  } 
 }

  componentDidMount(){
    axios.get('/'+this.state.gid+'/tasks').then(
      res => this.setState({tasks: res.data})
    ).catch(err => console.log(err))
  }

  render() {
  
    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Group Tasks" />
        <Text
          onPress={() =>
            this.props.navigation.navigate("Group", {
              id: this.state.gid,
            })
          }
          style={{textDecorationLine: "underline",color: "blue"}}
        >
          Return to group
        </Text>
        <View style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
        <View style={{flexGrow: 1}}></View>
       <CreateTaskModal 
        gid={this.state.gid}
       />
        </View>
        {this.state.tasks.map( task => 
           <TaskItem 
            key={task.id}
            taskName={task.name}
            dueDate={task.dueDate}
           />)}
      </Fragment>
    );
  }
}
