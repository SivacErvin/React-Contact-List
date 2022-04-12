import { Button, IconButton } from '@mui/material'
import React from 'react'
import { Persona } from '../App'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

interface ContactsListProps {
  contactList: Persona[]
  deleteContact: (number: string) => any
  setFavourite: (number: string) => any
  favourites: boolean
}

function ContactsList(props: ContactsListProps) {

  return (
    <div>
      {props.contactList.map((pers) => {
        return (
          <div>
            {pers.favourite ? <IconButton onClick={() => props.setFavourite(pers.number)}>  <FavoriteIcon /> </IconButton> : <IconButton onClick={() => props.setFavourite(pers.number)}> <FavoriteBorderIcon /> </IconButton>}
            {pers.name} {pers.surname} {pers.number}
            <Button><InfoIcon /></Button>
            <Button onClick={() => props.deleteContact(pers.number)} ><DeleteIcon /></Button>
            <Button>Update Contact</Button>
          </div>
        )
      })}
    </div>
  )
}
export default ContactsList
