'use client'
import {Container} from 'react-bootstrap'

export default function Home() {
  const liTextClass = 'text-primary'

  return (
    <Container className={'mt-3'}>
      <h3 className={'text-success'}>The Customer Relations Management Tool</h3>
      <ul className={'text-info'}>
        <li>User Maintenance</li>
        <li>Client Maintenance</li>
      </ul>
      <p className={'text-success'}>
        This is a simple CRM tool that allows you to manage your users and clients.<br/>
      </p>
      <ul className={liTextClass}>
        <li>
          You can add, update, and delete users and clients.</li>
        <li>
          You can also assign clients to users and view the clients assigned to a user.</li>
        <li>
          You can add notes to users and clients to keep track of important information.</li>
        <li>
          You can keep track of your users activities and clients activities.</li>
        <li>
          You can customize your user&apos;s experience by adding custom fields to users and clients.</li>
      </ul>
    </Container>
  )
}
