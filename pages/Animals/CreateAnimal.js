import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, Button, TextInput } from 'react-native';

export default CreateAnimal = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        animalName: "",
        birthDate: new Date(1598051730000),
        species: "",
        caracteristics: "",
        breed: "",
        colors: "",
        weight: "",
        castration: false,
        transponderNumber: null,
        identificationNumber: null
      },
    })
    const onSubmit = (data) => console.log(data)
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    return (
      <View>
        <Text>Identité de l'animal</Text>
        <Text>{' '}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nom de votre animal"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="animalName"
        />
        {errors.animalName && <Text style={styles.alertForm}>Nom de l'animal obligatoire</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Button onPress={showDatepicker} title="Show date picker!" />
              <Text>selected: {value.toLocaleString()}</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={value}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </>
          )}
          name="birthDate"
        />      
        {errors.birthDate && <Text style={styles.alertForm}>Date de naissance de l'animal obligatoire</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Espèce(s)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="species"
        />      
        {errors.species && <Text style={styles.alertForm}>Espèce à définir</Text>}
  
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Traits ou caractéristiques visibles/discernables"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="caracteristics"
        />
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Race(s)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="breed"
        />      
        {errors.breed && <Text style={styles.alertForm}>Race à définir</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Couleur(s) de robe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="colors"
        />      
        {errors.colors && <Text style={styles.alertForm}>Couleur(s) de robe à définir</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Poids"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="weight"
        />      
        {errors.weight && <Text style={styles.alertForm}>Poids à définir</Text>}
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Castration"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="castration"
        />      
        {errors.castration && <Text style={styles.alertForm}>Castration à définir</Text>}
  
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Numéro de transpondeur"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="transponderNumber"
        />
  
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Numéro de tatouage"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="identificationNumber"
        /> 
  
         <Button title="Valider" onPress={handleSubmit(onSubmit)} />
      </View>
    )
  }