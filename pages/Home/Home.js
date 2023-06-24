import { Button } from "react-native"

export default Home = ({navigation}) => {
    return (
      <>
        <Button 
          title="Voir mes animaux"
          onPress={() => navigation.navigate('AnimalsList')}
        />        
        <Button  
          title="Connexion"
          onPress={() => navigation.navigate('Login')}
        />
        <Button 
          title="Inscription"
          onPress={() => navigation.navigate('Signup')}
        />
      </>
    )
  }