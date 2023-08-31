import { StyleSheet, Text, View } from 'react-native';
import { Btn } from './src/components/Button';
import { useState } from 'react';



export default function App(){
  const [screenValue, setScreenValue] = useState('0');
  const [hasDot, setHasDot] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operator, setOperator] = useState('');

  function handleSetValue(value: string) {
    let newValue;
    switch (value) {
      case ",": 
        newValue = hasDot ? screenValue : screenValue+value 
        setHasDot(true)       
        break;    
      default:
        newValue = screenValue === '0' ? value : screenValue + value ;
        break;
    } 
    setScreenValue(newValue);
  }

  function handleClearScreenValue() {
    setScreenValue('0')

  }

  function convertValue(value: string): number {
    return parseFloat(value.replaceAll(',','.'))
  }

  function handleOperator(value: string) {
    if (operator === '') {

      if (value1 === ''){
        setValue1(screenValue)
        setScreenValue('0')
      }
            
      setOperator(value)
      
    }else {
       let calculatedValue = 0;
       switch (operator) {
        case '+':
          calculatedValue = convertValue(value1) + convertValue(screenValue)
          break;
        case '-':
          calculatedValue = convertValue(value1) - convertValue(screenValue)
          break;
        case '*':
          calculatedValue = convertValue(value1) * convertValue(screenValue)
          break;
        case '/':
          calculatedValue = convertValue(value1) / convertValue(screenValue)
          break;
       
        default:
          break;
       }
              
       setValue1('');
       setScreenValue(calculatedValue?.toString().replaceAll('.',','));
       setOperator('')
    }


  }
  return (
    <View style={{
      flex: 1,            
      backgroundColor: "#000",      
    }}>
      <View style={styles.calcScreen}> 
        <Text style={{ 
          color: "#FFF",
          fontSize: 60,          
        }}>{value1 && screenValue === '0'? value1 : screenValue}</Text>
      </View>
      <View style={styles.container}>
        <Btn label='C' type='unary' onPress={() => handleClearScreenValue()} />
        <Btn label='+/-'type='unary' onPress={() => console.log('2')} />
        <Btn label='%' type='unary'onPress={() => handleOperator('/')}  isOperator={operator === '/'} />
        <Btn label='/' type='binary' onPress={() => handleOperator('/')}  isOperator={operator === '/'}  />

        <Btn label='7'  type='number' onPress={() => handleSetValue('7')} />
        <Btn label='8' type='number' onPress={() => handleSetValue('8')} />
        <Btn label='9' type='number' onPress={() => handleSetValue('9')} />
        <Btn label='x' type='binary' onPress={() => handleOperator('*')}  isOperator={operator === '*'}/>

        <Btn label='4' type='number' onPress={() => handleSetValue('4')} />
        <Btn label='5' type='number' onPress={() => handleSetValue('5')} />
        <Btn label='6' type='number' onPress={() => handleSetValue('6')} />
        <Btn label='-' type='binary' onPress={() => handleOperator('-')} isOperator={operator === '-'} />
        
        <Btn label='1' type='number' onPress={() => handleSetValue('1')} />
        <Btn label='2' type='number' onPress={() => handleSetValue('2')} />
        <Btn label='3' type='number' onPress={() => handleSetValue('3')} />
        <Btn label='+' type='binary' onPress={() => handleOperator('+')}  isOperator={operator === '+'}/>
        
        <Btn label='0' type='number' onPress={() => handleSetValue('0')} double />
        <Btn label=',' type='number' onPress={() => handleSetValue(',')} />
        <Btn label='=' type='binary' onPress={() =>handleOperator('=')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: "100%"
  },
  calcScreen: {
    flex: 1,
    width: "100%",
    color: "#FFF",    
    fontSize: 60,
    textAlign: "right",
    padding: 20,
    alignItems: 'flex-end',
    flexDirection: 'column-reverse'
  }
});
