import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={[styles.container]}>
      <Text style={styles.textHuge}>{count}</Text>
      {/* <Pressable
        style={[styles.floatingButton]}
        onPress={() => setCount(count + 1)}
        >
        <Text style={{ color: 'white', fontSize: 20 }}>
        +1
        </Text>
        </Pressable> */}
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        label='+1'
      />
      <FAB label='-1' customStyles={{ left: 20, bottom: 20 }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#65588F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  }
});
