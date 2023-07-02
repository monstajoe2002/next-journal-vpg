import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><strong>Journal App</strong></li>
        </ul>
        <ul>
            <li>
                <Link href="/entry/create" role={'button'}>New Entry</Link>
            </li>
        </ul>
    </nav>
  )
}
