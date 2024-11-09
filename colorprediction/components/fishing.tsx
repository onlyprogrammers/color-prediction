import Image from 'next/image'
import {Fish} from 'lucide-react'
import { Card, CardContent } from './ui/card'

export default function Fishing(){
    return (
        <>

<section className="space-y-1">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-400">
            <Fish className="h-5 w-5" /> Fishing
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {fishingGames.map((game, index) => (
              <Card key={index} className="bg-gray-800/50 overflow-hidden group hover:bg-gray-800 transition-all duration-300">
                <CardContent className="p-0 relative">
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={200}
                    height={150}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xs font-medium group-hover:text-blue-400 transition-colors">{game.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        </>
    )
}


const fishingGames = [
    { title: "Royal Fishing", image: "/placeholder.svg?height=150&width=200" },
    { title: "All-Star", image: "/placeholder.svg?height=150&width=200" },
    { title: "Dragon Fishing", image: "/placeholder.svg?height=150&width=200" },
    { title: "Jackpot Fishing", image: "/placeholder.svg?height=150&width=200" },
    { title: "Golden Tycoon", image: "/placeholder.svg?height=150&width=200" },
    { title: "Lucky Fishing", image: "/placeholder.svg?height=150&width=200" },
  ]