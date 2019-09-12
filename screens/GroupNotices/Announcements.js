import React, { Fragment } from "react";
import { Text,View } from "react-native";
import NoticeItem from './NoticeItem'
import CreateNoticeModal from './CreateNoticeModal'
import axios from 'axios'
import ActionBar from "../../components/ActionBar";


export default class GroupNoticeScreen extends React.Component {
  constructor(props) {
    super(props);
    const gid = this.props.navigation.getParam("id", " ");
    this.state={
      gid: gid,
      notices: []
    }  
  }
  
  componentDidMount(){
    axios.get('/notices/group/'+this.state.gid).then(
      res => this.setState({notices: res.data})
    ).catch(err => console.log(err))
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      axios.get('/notices/group/'+this.state.gid).then(
        res => this.setState({notices: res.data})
      ).catch(err => console.log(err))
    }
  }

  render() {
    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Announcements" />
        <View style={{display: "flex",flexDirection: "row"}}>
        <Text
          onPress={() =>
            this.props.navigation.navigate("Group", {
              id: this.state.gid,
            })
          }
        >
          Return to group
        </Text>
        <View style={{flexGrow: 1}}></View>
        <CreateNoticeModal gid={this.state.gid}/>
        </View>
        {this.state.notices.map( notice => <NoticeItem 
          key={notice.id}
          name={notice.title}
          addedDate={notice.date}
        />)}
      </Fragment>
    );
  }
}
