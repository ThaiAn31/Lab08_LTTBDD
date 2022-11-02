import React, { useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Animated, Text, View, StyleSheet, Button, } from 'react-native';

const App = () => {


  const move = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(move, {
      toValue: 370,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };


  const stop = () => {
    Animated.timing(move, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setTimeout(
      () =>
        move.stopAnimation(() =>
          console.log("Stop")
        ),
      250
    );
  };

  const restart = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };


  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  return (

    <View style={styles.container}>
      <SafeAreaView style={{ alignItems: "center", justifyContent: "center", }}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            }
          ]}
        >
          <Text style={styles.fadingText}>Thai An</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In" onPress={fadeIn} />
          <Button title="Fade Out" onPress={fadeOut} />
        </View>
      </SafeAreaView>

      <Animated.View
        style={[
          styles.top,
          {
            translateX: move,
          },
        ]}
      >
        <Ionicons name="walk-outline" size={70} color="black" />
      </Animated.View>

      <View>
        <Button title="Start" onPress={start} />
        <Button title="Stop" onPress={stop} />
        <Button title="Resest" onPress={restart} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    paddingTop: 90,
    flex: 1,

  },
  fadingContainer: {
    padding: 40,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 32
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }

});

export default App;
