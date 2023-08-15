'use client'
import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const onSubmit = () => {
  console.log('Click To Sub');
}

export default function AddTodo() {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button 
            variant="outline-secondary" 
            id="button-addon2"
            type='submit'
          >
            Button
          </Button>
        </InputGroup>
      </form>
    </div>
  )
}
