import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query:'' }
    this.getVenues = this.getVenues.bind(this);
    this.querySet = this.querySet.bind(this);
  }
  querySet(event){
    this.setState({query:event.target.value})
    console.log(this.state.query)
  }
  getVenues(){
    axios.get('https://api.foursquare.com/v2/venues/explore?client_id=4LXKEVFPNGA533UGPAFSTMI13X2YBOR0MI4V4G3R4MC2F1HG&client_secret=X4MLQECXX4SZ5MJC4M0EJZCUMPKFFXTVAJ3OOHLNKIYVMRFL&v=20180323&limit=1&ll=40.7243,-74.0018&query=' + this.state.query, {
      
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() { 

    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return(
      <View style={{margin:25}}>
        <View>
          <Text style={{color:'grey', fontSize:24}}>Query</Text>
              <Input onChange={this.querySet} leftIcon={
                <Icon
                  name='jquery'
                  size={24}
                  color='grey'
                />
              } placeholder='Query'/>
        </View>
        <View>
          <Text style={{color:'grey', fontSize:24}}>Location</Text>
              <Input leftIcon={
                <Icon3
                  name='location'
                  size={24}
                  color='grey'
                />
              } placeholder='Location'/>
        </View>
        <View>
          <Text style={{color:'grey', fontSize:24, marginTop:25}}>Category</Text>
            <Dropdown
              baseColor='grey'
              textColor='grey'
              label={<Icon2
                name='dashboard'
                size={24}
                color='grey'
                textBreakStrategy='hello'
              />
              }
              data={data}
            />
        </View>
        <View>
          <Button
            onPress={this.getVenues}
            containerStyle={{backgroundColor: 'grey'}}
            titleStyle={{color:'white'}}
            type="outline"
            icon={
              <Icon4
                name="map-search"
                size={24}
                color="white"
              />
            }
            title="Search"
          />
        </View>
      </View>
    );
  }
}