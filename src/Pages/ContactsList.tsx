import { Button, IconButton } from '@mui/material'
import React from 'react'
import { Persona } from '../App'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

interface ContactsListProps {
    contactList: Persona[]
    deleteContact: (number:string)=>any
}

function ContactsList(props:ContactsListProps) {

  return (
    <div>{props.contactList.map((pers)=> {
        return (
            <div>
                <IconButton>
                  <FavoriteBorderIcon/>
                  </IconButton>
                  {pers.name} {pers.surname} {pers.number} 
                  <Button onClick={()=>props.deleteContact(pers.number)} >
                    <DeleteIcon/>
                    </Button>
                <Button>Update Contact</Button>
            </div>
        )
    })}</div>
  )
}
export default ContactsList