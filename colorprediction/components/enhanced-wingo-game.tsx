'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, History, HelpCircle, RefreshCw, Volume2 } from "lucide-react"
import Link from "next/link"

type BetType = 'color' | 'size' | 'oddEven' | 'number'
type BetOption = string | number

interface Bet {
  type: BetType
  option: BetOption
}

interface GameResult {
  number: number
  color: string
  size: string
  oddEven: string
}

export default function Wingo() {
  const [score, setScore] = useState(1000)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameHistory, setGameHistory] = useState<GameResult[]>([])
  const [currentBets, setCurrentBets] = useState<Bet[]>([])
  const [lastResult, setLastResult] = useState<GameResult | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [betAmount, setBetAmount] = useState(10)

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      endRound()
    }
  }, [timeLeft, isPlaying])

  const startRound = () => {
    if (currentBets.length > 0) {
      setIsPlaying(true)
      setTimeLeft(30)
    }
  }

  const endRound = () => {
    const number = Math.floor(Math.random() * 10)
    const result: GameResult = {
      number,
      color: number === 0 ? 'violet' : number % 2 === 0 ? 'red' : 'green',
      size: number > 4 ? 'big' : 'small',
      oddEven: number === 0 ? 'zero' : number % 2 === 0 ? 'even' : 'odd'
    }
    setLastResult(result)
    setIsPlaying(false)
    
    let pointsWon = 0
    currentBets.forEach(bet => {
      let won = false
      switch (bet.type) {
        case 'color':
          won = bet.option === result.color
          break
        case 'size':
          won = bet.option === result.size
          break
        case 'oddEven':
          won = bet.option === result.oddEven
          break
        case 'number':
          won = bet.option === result.number
          break
      }
      pointsWon += won ? betAmount : -betAmount
    })
    
    setScore(prev => prev + pointsWon)
    setGameHistory(prev => [result, ...prev.slice(0, 9)])
    setCurrentBets([])
  }

  const toggleBet = (type: BetType, option: BetOption) => {
    if (!isPlaying) {
      setCurrentBets(prev => {
        const existingBetIndex = prev.findIndex(bet => bet.type === type && bet.option === option)
        if (existingBetIndex > -1) {
          return prev.filter((_, index) => index !== existingBetIndex)
        } else {
          return [...prev, { type, option }]
        }
      })
    }
  }

  const isBetSelected = (type: BetType, option: BetOption) => {
    return currentBets.some(bet => bet.type === type && bet.option === option)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900">
      <header className="flex items-center h-16 px-4 border-b border-indigo-800">
        <Link href="#" className="flex items-center gap-2 mr-4">
          <ArrowLeft className="w-6 h-6 text-indigo-300" />
        </Link>
        <h1 className="text-2xl font-bold text-white">Wingo Deluxe</h1>
        <div className="flex items-center ml-auto gap-2">
          <Button variant="ghost" size="icon">
            <Volume2 className="w-6 h-6 text-indigo-300" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-6 h-6 text-indigo-300" />
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-auto">
        <Card className="bg-indigo-800 border-indigo-700">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-white">{score}</div>
            <div className="text-sm text-indigo-300">Points balance</div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-800 border-indigo-700">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-indigo-300">Time remaining</div>
              <div className="text-2xl font-mono text-white">{timeLeft}s</div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {['red', 'green', 'violet'].map(color => (
                <Button
                  key={color}
                  variant={isBetSelected('color', color) ? "default" : "outline"}
                  className={`bg-${color}-600 hover:bg-${color}-700 text-white`}
                  onClick={() => toggleBet('color', color)}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {['big', 'small'].map(size => (
                <Button
                  key={size}
                  variant={isBetSelected('size', size) ? "default" : "outline"}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => toggleBet('size', size)}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {['odd', 'even'].map(oddEven => (
                <Button
                  key={oddEven}
                  variant={isBetSelected('oddEven', oddEven) ? "default" : "outline"}
                  className="bg-pink-600 hover:bg-pink-700 text-white"
                  onClick={() => toggleBet('oddEven', oddEven)}
                >
                  {oddEven.charAt(0).toUpperCase() + oddEven.slice(1)}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <Button
                  key={i}
                  variant={isBetSelected('number', i) ? "default" : "outline"}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                  onClick={() => toggleBet('number', i)}
                >
                  {i}
                </Button>
              ))}
            </div>

            <div className="mb-4">
              <label htmlFor="bet-amount" className="block text-sm font-medium text-indigo-300 mb-2">
                Bet Amount: {betAmount}
              </label>
              <Slider
                id="bet-amount"
                min={10}
                max={100}
                step={10}
                value={[betAmount]}
                onValueChange={(value) => setBetAmount(value[0])}
              />
            </div>

            {!isPlaying ? (
              <Button 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105" 
                onClick={startRound}
                disabled={currentBets.length === 0}
              >
                Start Round
              </Button>
            ) : (
              <div className="text-center text-5xl font-bold text-white animate-pulse">
                {lastResult ? lastResult.number : '?'}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 bg-indigo-700 text-white hover:bg-indigo-600" onClick={() => setGameHistory([])}>
            <History className="w-4 h-4 mr-2" />
            Clear History
          </Button>
          <Button variant="outline" className="flex-1 bg-indigo-700 text-white hover:bg-indigo-600" onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {gameHistory.length > 0 && (
          <Card className="bg-indigo-800 border-indigo-700">
            <CardHeader>
              <CardTitle className="text-white">Game History</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="text-indigo-300 text-sm">
                    <th className="text-left">Number</th>
                    <th className="text-left">Color</th>
                    <th className="text-left">Size</th>
                    <th className="text-left">Odd/Even</th>
                  </tr>
                </thead>
                <tbody>
                  {gameHistory.map((result, i) => (
                    <tr key={i} className="text-white">
                      <td className="py-2">{result.number}</td>
                      <td>
                        <Badge variant={result.color === 'red' ? 'destructive' : result.color === 'green' ? 'default' : 'secondary'}>
                          {result.color}
                        </Badge>
                      </td>
                      <td>{result.size}</td>
                      <td>{result.oddEven}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}