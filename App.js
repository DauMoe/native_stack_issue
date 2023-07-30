import React from 'react';
import {Animated, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const withNavigator = true;

class App extends React.Component {
  render() {
    if (withNavigator) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Test" component={TestScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return <TestScreen />;
  }
}

class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.nestHeight = new Animated.Value(80);
  }

  componentDidMount() {
    Animated.timing(this.nestHeight, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}>
        <Animated.View
          style={{
            backgroundColor: 'green',
            width: 100,
            height: 100,
            position: 'absolute',
            top: 10,
            right: 10,
            overflow: 'visible',
          }}>
          <Animated.View
            style={{
              position: 'relative',
              width: 80,
              height: 120,
              backgroundColor: 'red',
              zIndex: 11,
            }}>
            <Animated.View
              style={{
                backgroundColor: 'yellow',
                width: 30,
                height: this.nestHeight,
                position: 'relative',
                zIndex: 12,
              }}
            />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default App;
