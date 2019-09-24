import React, { Component } from 'react';
import { View} from 'react-native'
import { Text } from 'native-base'
import AddEducationModal from './AddEducationModal'

class EducationSettings extends Component {
    render() {
        return (
            <View style={{display: "flex",alignItems: "center",flexDirection: "row"}}>
<Text style={{marginLeft: 10,marginTop: 5,fontSize: 20}}>Education</Text>
<AddEducationModal />
            </View>
        );
    }
}

export default EducationSettings;