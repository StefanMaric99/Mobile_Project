import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Weathers from './components/Weathers';
import { Location, Permissions } from 'expo';
import Constants from 'expo-constants';

const key = "b6d552d521a6755c0b5004e7d501f556";
const base = "https://api.openweathermap.org/data/2.5";
const lat = 33.44;
const lon = -94.04;
const part = "hourly,current,minutely";
const uri = `${base}/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}&units=${"metric"}`;

export default class App extends Component {
  state = {
    location: null,
    errorMsg: null
  }

  componentDidMount() {
    const { isDevice } = Constants;
    // console.log(isDevice)
    if (Platform.OS === "android" && !isDevice) {
      console.log(123)
    //   this.setState({
    //     errorMsg: "this will not work on your emulator, try it again"
    //   })
    // } else {
    //   this._getLocationAsync();
    }
  }

  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.Location);
  //   if (status !== "granted") {
  //     this.setState({
  //       errorMsg: "Permission to access location was denied"
  //     })
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   this.setState({ location })
  // }

  // componentDidMount() {
  //   fetch(uri)
  //     .then((res) => res.json())
  //     .then(({ daily }) => console.log(daily))
  //     .catch((err) => console.log(err));
  // }

  render() {

    // if (this.state.location) {
    //   text = JSON.stringify(this.state.location)
    // }

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text>Hello World</Text>

        {/* {this.state.weathers.length === 0 ? (
          <View>
            <Text></Text>
          </View>
        ) : (
          <View>

          </View>
        )} */}
      </View>
    )
  }
}

// export default function App() {

//   // const [userLocation, setUserLocation] = React.useState(null);
//   // const [err, setErr] = React.useState("");

//   // const _getLocation = async () => {
//   //   const { status } = await Permissions.askAsync(Permissions.Location);

//   //   if (status !== 'granted') {
//   //     console.log("permission not granted");
//   //     setErr("Permisison Denied")
//   //   } else {
//   //     const location = await Location.getCurrentPositionAsync();

//   //     setUserLocation(location)
//   //     setErr("granted")
//   //   }
//   // }

//   // React.useEffect(() => {
//   //   if(Permissions) {
//   //     _getLocation();
//   //   } else {
//   //     setErr("something is wrong")
//   //   }
//   // }, [])

//   const [data, setData] = React.useState({
//     isLoading: true,
//     data: {
//       list: []
//     }
//   });

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});