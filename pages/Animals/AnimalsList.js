import { Button, Text } from "react-native"

export default AnimalsList = ({navigation}) => {
  // définir comment sera retournée la liste des animaux
  // utiliser react-query ?
  const animalsList = [{
    id: 0,
    name: "Darwin",
    type: "Dog"
  },{
    id: 1,
    name: "Joergen",
    type: "Dog"
  },{
    id: 2,
    name: "Piwa",
    type: "Cat"
  }]

  return (
      <>
        <Text>Liste des animaux du propriétaire ...</Text>
        {animalsList && animalsList.map(animal => {
          return (
            <>
              <Text key={animal.id}>{animal.name} ({animal.type})</Text>
              <Button 
                title="Détail"
                onPress={() => navigation.navigate('DetailAnimal', {animal: animal.ID})} />
            </>
          )
        })}
        <Button
          title="Enregistrer un animal"
          onPress={() => navigation.navigate('CreateAnimal')}
        />
      </>
  )
}