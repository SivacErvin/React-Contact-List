/* eslint-disable no-octal */
import { Button } from '@mui/material';
import React,{ useState } from 'react';
import './App.scss';
import ContactsList from './Pages/ContactsList';
import { Input } from '@mui/material';

export interface Persona{
  name: string
  surname: string
  number: string
}

function App() {

  const persona1:Persona = {name:"Ivo", surname:"Ivić", number: "098538907"};
  const persona2:Persona = {name:"Andro", surname:"Andrić", number: "098538909"};
  const initialContactList:Persona[] = [persona1,persona2];
  const [contactList, setContactsList] = useState(initialContactList);

  const [person, setPerson] = useState<Persona>({name:"", surname:"", number: ""});
  
  function add(){

    setContactsList([...contactList, person]);

    setPerson({name:"", surname:"", number: ""});    
  }



  function handleInput(event: any){

    const name = event.target.name;
    const value = event.target.value;

    setPerson(values => ({...values, [name]:value}));

    //console.log(person);
  }

  function deleteContact(number:string){

    const newList=contactList.filter((contact)=>(number !== contact.number));
    setContactsList(newList);

  }

  return (
    <div className="App">
      <h1 className='Top'>
        Evo promijeniti cemo ovo samo za Ivu.
      </h1>

      <div>
        <Input name="name" value={person.name } placeholder='Name' onChange={handleInput}/>
        <Input name="surname" value={person.surname } placeholder='Surname' onChange={handleInput}/>
        <Input name="number" value={person.number } placeholder='Number' onChange={handleInput}/>
        <Button variant='outlined' onClick={add} >
          Create contact 
        </Button>
      </div>
      <ContactsList contactList={contactList} deleteContact={deleteContact} />
    </div>
  );
} 

export default App;
