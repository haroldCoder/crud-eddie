import React from 'react'

export default function Cards({name, last_name, age}) {
  return (
    <div>
        <section>
            <h1 className='text-white'>{name}</h1>
        </section>
        <p className='text-blue-500'>{last_name}</p>
        <p className='text-blue-400'>{age}</p>
    </div>
  )
}
