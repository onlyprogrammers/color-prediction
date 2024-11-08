'use client'

import Link from "next/link"
import { Trophy, Ticket, Coins, Smartphone, Trophy as TrophyIcon, PlayCircle, Fish, Plane } from "lucide-react"

const categories = [
  
  { title: "Casino", icon: Coins, bgClass: "from-pink-500 to-rose-500", href: "#casino" },
  { title: "Slots", icon: Smartphone, bgClass: "from-violet-500 to-purple-600", href: "#slots" },
  { title: "Sports", icon: TrophyIcon, bgClass: "from-orange-400 to-orange-500", href: "#sports" },
  { title: "Rummy", icon: PlayCircle, bgClass: "from-blue-400 to-violet-500", href: "#rummy" },
  { title: "Fishing", icon: Fish, bgClass: "from-pink-400 to-rose-400", href: "#fishing" },
  { title: "Original", icon: Plane, bgClass: "from-sky-400 to-blue-500", href: "#original" },
]
const toptwo=[
  { title: "Popular", icon: Trophy, bgClass: "from-blue-500 to-blue-600", href: "#popular" },
  { title: "Lottery", icon: Ticket, bgClass: "from-purple-500 to-purple-600", href: "#lottery" },
]

export default function Gamingcatagry() {
  return (
    <div className="p-2 bg-transparent gap-2">
      <div className="grid grid-cols-2 gap-1 my-2" >
        {toptwo.map((category, index) => (
          <Link
            key={category.title}
            href={category.href}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${category.bgClass} p-2 ${
              index < 2 ? 'aspect-[2/1]' : 'aspect-[2/1]'
            } flex flex-col justify-between h-12 `}
            style={{width:'-webkit-fill-available'}}
          >
            <div className="absolute top-2 left-2 rounded-full bg-white/10 p-2">
              <category.icon className="w-4 h-4 text-white" />
            </div>
            <div className="self-end mt-auto">
              <h2 className="text-lg font-bold text-white">{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            href={category.href}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${category.bgClass} p-2 ${
              index < 2 ? 'aspect-[2/1]' : 'aspect-[2/1]'
            } flex flex-col justify-between h-11`}
            style={{width:'-webkit-fill-available'}}
          >
            <div className="absolute top-2 left-2 rounded-full bg-white/10 p-2">
              <category.icon className="w-3 h-3 text-white" />
            </div>
            <div className="self-end mt-auto">
              <h2 className="text-base font-bold text-white">{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}