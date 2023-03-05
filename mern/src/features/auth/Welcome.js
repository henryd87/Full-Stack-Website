import React from 'react'
import {Link} from 'react-router-dom'
const date = new Date()
const today = new Intl.DateTimeFormat('en-US',{dateStyle:"full", timeStyle:"long"}).
format(date)

const Welcome = () => {
    const content = (
        <section className = "welcome">
            <p>{today}</p>
            <p><Link to="/dash/notes">View technotes</Link></p>
            <p><Link to="/dash/users">View user settings</Link></p>
        </section>
    )
  return content
}

export default Welcome
