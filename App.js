import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './components/Home';
import { useEffect, useState, } from 'react';
import axios from 'axios';

// export default function App() {
//   const [users, setUsers] = useState([]);
//   // useEffect accept 2 argument
//   // une fonction anonyme
//   // un tableau de dépendances
//   console.log('return App.js');
//   useEffect(() => {
//     console.log('useEffect App.js')
//     // synchrone , asynchrone, promise, ajax, fetch, axios => 
//     // faire des appels à une API
//     axios.get('https://api.github.com/users').then((response) => {

//       const data = response.data; // [{...} , {...}]
//       setUsers(data);

//     }).catch(error => {

//       console.log('error : ', error);
//     });

//   }, []);
//   const usersElements = users.map(user => {
//     return (
//       <View>
//         <Text>Id : {user.id}</Text>
//         <Text>Username : {user.login}</Text>
//         <Image style={styles.image} source={{uri: user.avatar_url}}  />
//       </View>
//     )
//   })
//   return (
//     <View style={styles.container}>
//       {/* <Home /> */}
//     {usersElements}

//     </View>
//   );
// }



const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50
  }
});

