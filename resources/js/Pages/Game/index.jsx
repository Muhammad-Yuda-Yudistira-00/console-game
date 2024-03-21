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
			<div className="container px-8 bg-[url('/texture/256x256/Plaster/Plaster_04-256x256.png')] min-w-full min-h-full">
				<div className="bg-white">
					<h1 id="judul" className="center text-4xl pb-4 pl-4 text-stone-700 font-light font-second">Console Game Generation</h1>
					<ul className="flex gap-3 overflow-x-scroll bg-gradient-to-b from-teal-950 to-stone-800 to-80% pb-4 pt-1 px-4" >
						{platforms.map(platform => {
							let count_id = platform.games_count.toLocaleString('id')
							return(
								<li key={platform.id} className="">
									<h2 className="text-2xl text-white font-tersier tracking-widest">{platform.name}</h2>
									<small className="text-orange-200 italic font-second tracking-widest">{count_id} Games</small>
									<div className="group inline-block h-[447px] w-[300px] bg-gradient-to-br from-white from-60% via-stone-800 to-rose-900 overflow-y-scroll">
										<img src={platform.image_background} className="border-4 sepia group-hover:sepia-0 transition duration-1000 border-dotted border-red-900" />
										<ul className="flex flex-col px-8 py-2 list-disc list-outside">
											<h3 className="text-2xl m-auto pb-2 text-stone-800 font-bold font-primary">Popular Games</h3>
											{platform.games.map(game => {
												return(
													<li key={game.id} className="" >
														<h3 className="text-stone-700 shadow-lg">{game.name}</h3>
													</li>
												)
											})}
										</ul>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				
			</div>
			
		</>
	)
}