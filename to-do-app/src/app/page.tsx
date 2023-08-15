'use client'
import React from "react"
import AddTodo from "@/components/AddTodo"
import Container from "react-bootstrap/esm/Container"

// Style Libs
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <main>
      <section className="pt-5">
        <Container>
          <h2>Omkar's NextJS ToDo App</h2>
          <AddTodo/>
        </Container>
      </section>
    </main>
  )
}
