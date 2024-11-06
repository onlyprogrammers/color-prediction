'use client'

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trophy, Gift, Gamepad2, Coins, Fish, Globe, Bell, HeadphonesIcon, HelpCircle, Info, Download, Search, User, ChevronLeft, ChevronRight, Wallet } from "lucide-react"
import football from '@/components/images/football.jpeg'
import basketball from '@/components/images/basketball.jpeg'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const missionBonuses = [
    { title: "Daily Login Bonus", description: "Log in daily to claim your bonus!", reward: "₹100", color: "from-purple-600 to-pink-600" },
    { title: "First Deposit Bonus", description: "Get 100% bonus on your first deposit!", reward: "Up to ₹10,000", color: "from-blue-600 to-cyan-600" },
    { title: "Refer a Friend", description: "Invite friends and earn rewards!", reward: "₹500 per referral", color: "from-green-600 to-teal-600" },
    { title: "Weekly Cashback", description: "Get 10% cashback on your weekly losses!", reward: "Up to ₹5,000", color: "from-orange-600 to-yellow-600" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % missionBonuses.length)
  }, [missionBonuses.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + missionBonuses.length) % missionBonuses.length)
  }, [missionBonuses.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070B34] to-[#1A1B4B] text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#070B34]/80 backdrop-blur-sm border-b border-gray-800 p-2">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Tiranga</h1>
          <div className="flex items-center gap-2">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 px-1 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 flex items-center gap-1">
                <div className="bg-white rounded-full p-2">
                  <Wallet className="h-4 w-4 text-purple-600" />
                </div>
                <div className="pr-3">
                  <p className="text-xs font-medium text-purple-100">Balance</p>
                  <p className="text-sm font-bold text-white">₹10,000.00</p>
                </div>
              </CardContent>
            </Card>
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
              <Link href='/register'>
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
              </Link>

            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto space-y-6 p-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input className="w-full pl-10 bg-gray-800 border-gray-700 focus:border-purple-500 text-white" placeholder="Search games..." />
        </div>

        {/* Mission Bonus Carousel */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {missionBonuses.map((bonus, index) => (
              <Card key={index} className={`flex-shrink-0 w-full bg-gradient-to-r ${bonus.color}`}>
                <CardContent className="p-4 relative">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{bonus.title}</h2>
                      <p className="text-base opacity-90 mb-2">{bonus.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300">
                        Claim Now
                      </Button>
                      <span className="text-xl font-bold">{bonus.reward}</span>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-white/20 p-2 rounded-bl-lg">
                    <Gift className="h-6 w-6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next slide</span>
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {missionBonuses.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sports Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-yellow-400">
            <Trophy className="h-5 w-5" /> Sports
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {sportsCards.map((card, index) => (
              <Card key={index} className="bg-gray-800/50 overflow-hidden group hover:bg-gray-800 transition-all duration-300">
                <CardContent className="p-0 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-base font-semibold group-hover:text-yellow-400 transition-colors">{card.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Casino Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-red-400">
            <Coins className="h-5 w-5" /> Casino
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {casinoGames.map((game, index) => (
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
                    <h3 className="text-xs font-medium group-hover:text-red-400 transition-colors">{game.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fishing Games */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-blue-400">
            <Fish className="h-5 w-5" /> Fishing
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

        {/* Winning Information */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-green-400">Winning Information</h2>
          <div className="space-y-1">
            {winningInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800/50 p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 m-0">
                <div className="flex items-center gap-3">
                  <Image
                    src={info.avatar}
                    alt={info.username}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-green-400"
                  />
                  <span className="text-xs font-medium">{info.username}</span>
                </div>
                <span className="text-green-400 font-semibold">₹{info.amount}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Logos */}
        <section className="grid grid-cols-3 gap-4">
          {platformLogos.map((logo, index) => (
            <Card key={index} className="bg-gray-800/50 p-2 hover:bg-gray-800 transition-all duration-300">
              <CardContent className="p-0 flex items-center justify-center">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Footer Links */}
        <section className="space-y-2">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              {link.icon}
              <span className="text-sm">{link.title}</span>
            </Link>
          ))}
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed py-2 bottom-0 left-0 right-0 border-t border-gray-800 bg-[#070B34]/80 backdrop-blur-sm p-1">
        <div className="flex items-center justify-around max-w-6xl mx-auto">
          {[
            { icon: <Gamepad2 className="h-6 w-6" />, label: "Games" },
            { icon: <Gift className="h-6 w-6" />, label: "Lottery" },
            { icon: <Trophy className="h-6 w-6" />, label: "Sports" },
            { icon: <Coins className="h-6 w-6" />, label: "Casino" },
            { icon: <Fish className="h-6 w-6" />, label: "Fishing" },
          ].map((item, index) => (
            <Button key={index} variant="ghost" size="sm" className="flex flex-col items-center gap-1 hover:bg-gray-800 transition-all duration-300">
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>
    </div>
  )
}

const sportsCards = [
  { title: "Football", image: football },
  { title: "Basketball", image: basketball },
]

const casinoGames = [
  { title: "Dragon Tiger", image: "/placeholder.svg?height=150&width=200" },
  { title: "American Roulette", image: "/placeholder.svg?height=150&width=200" },
  { title: "Super Sic Bo", image: "/placeholder.svg?height=150&width=200" },
  { title: "Auto Roulette", image: "/placeholder.svg?height=150&width=200" },
  { title: "Baccarat", image: "/placeholder.svg?height=150&width=200" },
  { title: "BlackJack", image: "/placeholder.svg?height=150&width=200" },
]

const fishingGames = [
  { title: "Royal Fishing", image: "/placeholder.svg?height=150&width=200" },
  { title: "All-Star", image: "/placeholder.svg?height=150&width=200" },
  { title: "Dragon Fishing", image: "/placeholder.svg?height=150&width=200" },
  { title: "Jackpot Fishing", image: "/placeholder.svg?height=150&width=200" },
  { title: "Golden Tycoon", image: "/placeholder.svg?height=150&width=200" },
  { title: "Lucky Fishing", image: "/placeholder.svg?height=150&width=200" },
]

const winningInfo = [
  { username: "LuckyPlayer1", amount: "944.00", avatar: "/placeholder.svg?height=40&width=40" },
  { username: "BigWinner2", amount: "830.00", avatar: "/placeholder.svg?height=40&width=40" },
  { username: "GoldenFish3", amount: "750.00", avatar: "/placeholder.svg?height=40&width=40" },
  { username: "LuckyCharm4", amount: "200.00", avatar: "/placeholder.svg?height=40&width=40" },
]

const platformLogos = [
  { name: "Evolution", image: "/placeholder.svg?height=40&width=100" },
  { name: "JDB", image: "/placeholder.svg?height=40&width=100" },
  { name: "AG", image: "/placeholder.svg?height=40&width=100" },
]

const footerLinks = [
  { title: "Language", icon: <Globe className="h-4 w-4" /> },
  { title: "Notification", icon: <Bell className="h-4 w-4" /> },
  { title: "24/7 Customer service", icon: <HeadphonesIcon className="h-4 w-4" /> },
  { title: "Beginner's Guide", icon: <HelpCircle className="h-4 w-4" /> },
  { title: "About us", icon: <Info className="h-4 w-4" /> },
  { title: "Download APP", icon: <Download className="h-4 w-4" /> },
]