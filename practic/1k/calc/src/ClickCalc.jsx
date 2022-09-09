import { Flex, Text, Button, Input, Box } from '@chakra-ui/react'
import { useState } from 'react'

function ClickCalk(props) {
    const [counts, setCounts] = useState('');
    const [result, setResult] = useState('');
  
    function applyExpression(countedNumber){
      setCounts(countedNumber)
      setResult(eval(counts))
     }
    return (
  <div className="App">
<Flex display="flex" flexDirection="column" justifyContent="center" alignItems="center">
<Flex gap="5px" flexDirection="column" justifyContent="center" alignItems="center">
<Flex w="50%" justifyContent="space-between" alignItems="center" bg="gray.50" borderRadius="8px">
     <Text display="flex" justifyContent="start" alignItems="center" w="20%" h="40px" px="16px">
{counts}
       </Text> 
       <Text w="fit-content" h="10%" textColor="tomato">
           {result}
       </Text>
     </Flex> 
     <Flex display="flex" justifyContent="center">
     <Numbers data={counts} onClick={setCounts}/>
     <Flex display="flex" flexDirection="column">
        <CountButton data={counts} expression={'+'} onClick={applyExpression} />
        <CountButton data={counts} expression={'-'} onClick={applyExpression} />
        <CountButton data={counts} expression={'*'} onClick={applyExpression} />
        <CountButton data={counts} expression={'/'} onClick={applyExpression} />
    </Flex>
    <Flex display="flex">  
      <Button bg="tomato" w="60px" h="60px" margin="4px" onClick={() => {
        setResult(eval(counts))
        setCounts('0')
        props.onClick(counts)
        }}>
          =
      </Button>
    </Flex>
  </Flex>
    </Flex>
   </Flex>
  </div>
    );
  }
  
  function Numbers (props) {
    const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map(
       number => {
       return <Button
       onClick = { (e) => {
        if (props.data != '0') props.onClick(props.data + e.target.innerHTML)
        else props.onClick(e.target.innerHTML)
      } 
      }
        key={number} w="60px" h="60px" margin="4px">
         {number}
        </Button> 
        }
    )
   return (
    <Box display='flex' justifyContent="center" flexWrap='wrap' w='30%'> {nums} </Box>
   )
   }
  
   function CountButton (props) {
    const expressions = /\+|\-|\/|\*| /
    const lastNumber = props. data[props.data. length - 1]
    function checkExpressionType () {
       if (expressions.test(lastNumber)) return 
       props.onClick(props.data + props.expression)
    }
    return (
    <Button bg="gray" w="60px" h="60px" margin='4px' onClick = { () => {checkExpressionType()}}>
    {props.expression}
    </Button>
    )
   }

   export default ClickCalk;