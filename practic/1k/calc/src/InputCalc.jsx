import { Flex, Text, Button, Input, Box } from '@chakra-ui/react'
import { useState,useEffect } from 'react'


function InputCalc (props) {
    const [result, setResult] = useState('')

    useEffect(() => { document.querySelector("input").focus() })
  
    function updateCount (e) { 
      const expressions = /\+|\-|\/|\*|=|[A-z]| /
      const lastNumber = e.target.value[e.target.value.length - 1]
      if (expressions.test(lastNumber)) return
      else setResult(eval(e.target.value))
    }

      function sendDataToHistory(e) {
         if (e.nativeEvent.key == "Enter") {
           props.onKeyDown(result) 
          } 
        }
      return (
        <Flex  justifyContent="center"  alignItems="center" border="2px" borderRadius="8px" borderColor="gray.50" >
        <Input border="transparent" onKeyDown={(e) => {sendDataToHistory(e)}} onInput={ (e) => {updateCount(e)} } type="text" />
         <Text textColor="tomato" px="4px"> {result} </Text>
        </Flex>        
     )
}

   
  
  export default InputCalc;
  


