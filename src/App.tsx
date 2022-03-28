/* eslint-disable no-octal */
import { Button } from '@mui/material';
import React,{ useState } from 'react';
import './App.scss';
import ContactsList from './Pages/ContactsList';
import { Input } from '@mui/material';
import FreeSolo from './Pages/Search';

export interface Persona{
  name: string
  surname: string
  number: string
  favourite: boolean
}

function App() {

  // const persona1:Persona = {name:"Ivo", surname:"Ivić", number: "098538907"};
  // const persona2:Persona = {name:"Andro", surname:"Andrić", number: "098538909"};
  // const initialContactList:Persona[] = [persona1,persona2];

  // console.log("ovo je log prije");
  // console.log(localStorage.getItem("Contacts"));
  // console.log(typeof(localStorage.getItem("Contacts")));
  // console.log("ovo je log poslije");

  // const init  = JSON.parse(localStorage.getItem("Contacts") || '{}');
  // console.log(init);
  // console.log(typeof(init));

  
  // const [contactList, setContactsList] = useState(initialContactList);
  const [contactList, setContactsList] = useState(JSON.parse(localStorage.getItem("Contacts") || '{}'));
  const [person, setPerson] = useState<Persona>({name:"", surname:"", number: "", favourite:false});

  React.useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contactList));
  }, [contactList]);
  
  function add(){
    //ne znam bas koliko je ovo dobro ali radi...-> ne dodaje prazne kontakte
    if(person.name !== "" && person.surname!=="" && person.number!==""){
      setContactsList([...contactList, person]);
      setPerson({name:"", surname:"", number: "", favourite:false}); 
    }    
  }

  function handleInput(event: any){
    const name = event.target.name;
    const value = event.target.value;
    setPerson(values => ({...values, [name]:value}));
    //console.log(person);
  }

  function deleteContact(number:string){
    const newList=contactList.filter((contact:any)=>(number !== contact.number));
    setContactsList(newList);
  }

  //ne osvjezava mi listu odmah vec nakon neke druge promjene npr brisanja 
  function setFavourite(number:string){
    contactList.map((contact:any)=>{
      if(number === contact.number){
        if(contact.favourite === true){
          contact.favourite = false;
        }else
        contact.favourite = true;
            }
    });
    const newList=contactList.filter((contact:any)=>(true))
    setContactsList(newList);
}

  return (
    <div className="App">
      <h1 className='Top'>
         Ovo će biti vrh stranice.
      </h1>
      <div>
        <FreeSolo contactList={contactList} />
        <Input name="name" value={person.name } placeholder='Name' onChange={handleInput}/>
        <Input name="surname" value={person.surname } placeholder='Surname' onChange={handleInput}/>
        <Input name="number" value={person.number } placeholder='Number' onChange={handleInput}/>
        <Button variant='outlined' onClick={add} >
          Create contact 
        </Button>
      </div>
      <ContactsList contactList={contactList} deleteContact={deleteContact} setFavourite={setFavourite} />
    </div>
  );
} 

export default App;
