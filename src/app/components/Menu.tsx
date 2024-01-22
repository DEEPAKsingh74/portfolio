"use client"

import React, { useState } from 'react'
import NavigationRoutes from '../portfolio/constants/NavigationRoutes'
import MenuItem from './MenuItem'
import { usePathname } from 'next/navigation'

const Menu = () => {

	const currentPath = usePathname();
	console.log("Router path: " + currentPath);
	

	return (
		<div>
			<ul className="flex flex-col gap-5 menu-list">
				{
					NavigationRoutes.map((item, index) => (
						<li key={index} className={currentPath === item.route ? 'active' : ""}><MenuItem route={item.route} name={item.name}/></li>
					))
				}
			</ul>
		</div>
	)
}

export default Menu