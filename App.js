import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import Voice from '@react-native-voice/voice'

const App = () => {
  useEffect(()=>{
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
  
  return () => {
    Voice.destroy().then(Voice.removeAllListeners)
  }
  },[])

  const onSpeechStart = (e) => {
    console.log(e)
  }
  const onSpeechEnd = (e) => {
    console.log(e)
  }
  const onSpeechResults = (e) => {
    console.log(e)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Demo</Text>
      <TouchableOpacity style={styles.mic}>
        <Image source={require('./button.png')}/>
      </TouchableOpacity>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#2c3e50",
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26
  },
  mic: {
    alignSelf: 'center',
    marginTop: 50,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 48,
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4
  }
});