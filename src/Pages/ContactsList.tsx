import { Button } from '@mui/material'
import React from 'react'
import { Persona } from '../App'

interface ContactsListProps {
    contactList: Persona[]
    deleteContact: (number:string)=>any
}

function ContactsList(props:ContactsListProps) {

  return (
    <div>{props.contactList.map((pers)=> {
        return (
            <div>
                {pers.name} {pers.surname} {pers.number} <Button onClick={()=>props.deleteContact(pers.number)} >Delete Contact</Button>
                <Button>Update Contact</Button>
            </div>
        )
    })}</div>
  )
}
//onClick={props.deleteContact(pers.number)}
export default ContactsList