import { Flex, Text, Button, Input, Box } from '@chakra-ui/react';
import Calculator from './Calculator';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { SlideFade, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('Calculator')
  let application;
  switch (mode) {
    case 'Calculator': application = <Calculator/>; break;
    case 'Converter': application = <Calculator/>; break;
    default: application = <Calculator />
  }

  function changeAppType () {
     mode == 'Calculator' ? setMode('Converter') : setMode('Calculator') 
  }
  return (
    <Box h='90vh'>
    <Menu  onClick={changeAppType} />
    {application}
    </Box>
  )

}

function Menu(props){
  const {isOpen, onToggle} = useDisclosure()
  return(
    <Box>
      <HamburgerIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px' onClick={onToggle}/>
    <SlideFade in={isOpen} offsetY='-20px' unmountOnExit>
    <Box position='absolute' bg='gray.100' p='10px' m='4px' borderRadius='8px' w='60%' zIndex='10'>
      <UnorderedList display='flex' flexDirectory='column' gap='10px' fontSize='20px'>
      <ListItem><Button onClick={() => {props.onClick('Calculator')}}> Calculator </Button></ListItem>
      <ListItem><Button onClick={() => {props.onClick('Converter')}}> Converter </Button></ListItem>
      <ListItem>Settings</ListItem>
      </UnorderedList>
    </Box>
    </SlideFade>
    </Box>
  )
}

export default App;
