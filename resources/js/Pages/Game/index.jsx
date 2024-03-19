import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function Index()
{
	let [platforms, setPlatforms] = useState([])

	let endpoint = "https://api.rawg.io/api/platforms?key=22922579854547c78f60419473de2913"
	useEffect(() => {
		fetch(
		  endpoint,
		  { method: 'GET',
		    headers: {
		      'Accept': 'application/json'
		    }
		})
		  .then(response => response.json())
		  .then(({results}) => {
		  	setPlatforms(results)
		  	console.log(results)
		  })
		  .catch(err => {
		      console.error(err);
		  });
	}, [])

	console.log(platforms)
	
	return (
		<>
			<Head title="Game" />
			<div className="container m-8">
				<h1 className="center text-4xl pb-8">Console Game Generation</h1>
				<ul className="flex justify-center overflow-x-scroll" >
					{platforms.map(platform => {
						return(
							<div>
								<li key={platform.id}>{platform.name}</li>
								<div className="inline-block h-[300px] w-[300px] bg-yellow-400">
									block
								</div>
							</div>
						)
					})}
				</ul>
				
			</div>
			
		</>
	)
}