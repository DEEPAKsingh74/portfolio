import Link from 'next/link'
import React from 'react'

const MenuItem = ({route, name}: {route: string, name: string}) => {
  return (
	<>
		<Link href={route}>{name}</Link>
	</>
  )
}

export default MenuItem