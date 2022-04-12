/* eslint-disable no-octal */
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import React, { useState } from 'react';
import './App.scss';
import ContactsList from './Pages/ContactsList';
import FreeSolo from './Pages/Search';
import Favourites from './Pages/Favourites';
import Navigation from './Pages/Navigation';
import { Routes, Route } from 'react-router-dom';

export interface Persona {
  name: string
  surname: string
  number: string
  favourite: boolean
}

function App() {

  const [contactList, setContactsList] = useState(JSON.parse(localStorage.getItem("Contacts") || '{}'));
  const [person, setPerson] = useState<Persona>({ name: "", surname: "", number: "", favourite: false });

  React.useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contactList));
  }, [contactList]);

  function add() {
    //ne znam bas koliko je ovo dobro ali radi...-> ne dodaje prazne kontakte
    if (person.name !== "" && person.surname !== "" && person.number !== "") {
      setContactsList([...contactList, person]);
      setPerson({ name: "", surname: "", number: "", favourite: false });
    }
  }

  function handleInput(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setPerson(values => ({ ...values, [name]: value }));
  }

  function deleteContact(number: string) {
    const newList = contactList.filter((contact: any) => (number !== contact.number));
    setContactsList(newList);
  }

  //nisam siguran u izvedbu, ako se moze poslat osoba i onda da se ta osoba nade u listu i zamjeni samo flag i update to bi bilo top, pokusavao sam nisam nasao rjesenje 

  function setFavourite(number: string) {
    contactList.map((contact: any) => {
      if (number === contact.number) {
        if (contact.favourite === true) {
          contact.favourite = false;
        } else
          contact.favourite = true;
      }
    });
    const newList = contactList.filter((contact: any) => (true))
    setContactsList(newList);
  }

  return (
    <div>

      <Navigation />
      <Routes>
        <Route path="/" element={

          <div>
            <FreeSolo contactList={contactList} />
            <Input name="name" value={person.name} placeholder='Name' onChange={handleInput} />
            <Input name="surname" value={person.surname} placeholder='Surname' onChange={handleInput} />
            <Input name="number" value={person.number} placeholder='Number' onChange={handleInput} />
            <Button variant='outlined' onClick={add} > Create contact </Button>
            <ContactsList contactList={contactList} deleteContact={deleteContact} setFavourite={setFavourite} favourites={false}/>
          </div>
        } />
        <Route path="favourites" element={<Favourites />} />
        <Route path="contactlist" element={<ContactsList contactList={contactList} deleteContact={deleteContact} setFavourite={setFavourite} favourites={false}/>} />
        <Route path="add" element={
          <div>
            <Input name="name" value={person.name} placeholder='Name' onChange={handleInput} />
            <Input name="surname" value={person.surname} placeholder='Surname' onChange={handleInput} />
            <Input name="number" value={person.number} placeholder='Number' onChange={handleInput} />
            <Button variant='outlined' onClick={add} > Create contact </Button>
          </div>} />

      </Routes>



      {/* 
      <div>
        
        <FreeSolo contactList={contactList} />
        <Input name="name" value={person.name } placeholder='Name' onChange={handleInput}/>
        <Input name="surname" value={person.surname } placeholder='Surname' onChange={handleInput}/>
        <Input name="number" value={person.number } placeholder='Number' onChange={handleInput}/>
        <Button variant='outlined' onClick={add} > Create contact </Button>
      </div> */}
      {/* <ContactsList contactList={contactList} deleteContact={deleteContact} setFavourite={setFavourite} /> */}
    </div>
  );
}

export default App;