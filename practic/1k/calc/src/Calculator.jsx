import { Flex, Text, Button, Input, Box } from '@chakra-ui/react'
import { useState } from 'react'
import ClickCalc from './ClickCalc'
import InputCalc from './InputCalc'

function Calculator () {
    const [calcType, setCalcType] = useState('ClickCalc')
    const [history, setHistory] = useState([])
    let calculator;
    switch (calcType) {
        case 'ClickCalc': calculator = <ClickCalc onClick={updateHistory}/>; break;
        case 'InputCalc': calculator = <InputCalc onKeyDown={updateHistory}/>; break;
        default: calculator = <ClickCalc />
     }
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" m='100px'>
            <Button  onClick={calcTypeChange}>
            Change CalcType
            </Button>
        <Box m='10px' justifyContent="center">
            <History data={history}/>
            {calculator}
        </Box>
        </Box>
            );
          

    function calcTypeChange ()  {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
    }

    function History (props) {
        const results = props.data.map(result => {
            return <Button key={result}>{result}</Button> })
            return(
                <Box>
                {results}
            </Box>
            )
    }
    
    function updateHistory(calcResult) {
        if (history.length > 6) {history.shift()}
        setHistory(history.concat(eval(calcResult)))
    }
}

export default Calculator;