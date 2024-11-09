"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Minus, Plus, History, RotateCcw, Plane } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AviatorGame() {
  const [balance, setBalance] = useState(1000)
  const [betAmount, setBetAmount] = useState(10)
  const [multiplier, setMultiplier] = useState(1)
  const [gameState, setGameState] = useState<"waiting" | "flying" | "crashed">("waiting")
  const [recentMultipliers, setRecentMultipliers] = useState([1.09, 2.97, 1.34, 2.47, 3.45, 1.12])
  const [activeBet, setActiveBet] = useState(0)
  const [countdown, setCountdown] = useState(30)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  const quickBets = [100.00, 200.00, 500.00, 1000.00]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState === "waiting") {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setGameState("flying")
            return 30
          }
          return prev - 1
        })
      }, 1000)
    } else if (gameState === "flying") {
      interval = setInterval(() => {
        setMultiplier((prev) => {
          const increase = Math.random() * 0.1 + 0.01
          const newMultiplier = Number((prev + increase).toFixed(2))
          if (Math.random() < 0.01 * (newMultiplier - 1)) {
            setGameState("crashed")
            clearInterval(interval)
          }
          return newMultiplier
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [gameState])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawPlane = (x: number, y: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(Math.PI / 8)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-20, 10)
      ctx.lineTo(-5, 5)
      ctx.lineTo(-10, 15)
      ctx.lineTo(5, 10)
      ctx.closePath()
      ctx.fillStyle = '#ff0000'
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (gameState === "flying") {
        const x = canvas.width * (multiplier - 1) / 10
        const y = canvas.height - (canvas.height * (multiplier - 1) / 10)
        drawPlane(x, y)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameState, multiplier])

  const startGame = () => {
    if (balance < betAmount) return
    setActiveBet(betAmount)
    setBalance(prev => prev - betAmount)
  }

  const cashOut = () => {
    if (gameState !== "flying") return
    const winnings = Math.floor(activeBet * multiplier)
    setBalance(prev => prev + winnings)
    setActiveBet(0)
  }

  useEffect(() => {
    if (gameState === "crashed") {
      setRecentMultipliers(prev => [Number(multiplier.toFixed(2)), ...prev.slice(0, 5)])
      setTimeout(() => {
        setGameState("waiting")
        setMultiplier(1)
        setActiveBet(0)
        setCountdown(30)
      }, 3000)
    }
  }, [gameState, multiplier])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-2 sm:p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <div className="text-2xl sm:text-3xl font-bold text-red-500">Aviator</div>
        <div className="text-xl sm:text-2xl font-semibold text-green-400">
          {balance.toFixed(2)} <span className="text-sm">INR</span>
        </div>
      </div>

      {/* Recent Multipliers */}
      <div className="flex gap-2 sm:gap-4 mb-2 sm:mb-4 overflow-x-auto bg-gray-800 p-2 rounded-lg text-sm sm:text-base">
        {recentMultipliers.map((m, i) => (
          <div
            key={i}
            className={`font-medium ${
              i % 2 === 0 ? "text-blue-400" : i % 3 === 0 ? "text-purple-400" : "text-pink-400"
            }`}
          >
            {m.toFixed(2)}x
          </div>
        ))}
        <div className="flex items-center gap-2 ml-auto">
          <History className="w-4 h-4 sm:w-5 sm:h-5" />
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-48 sm:h-64 md:h-80 mb-2 sm:mb-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden shadow-lg">
        <canvas ref={canvasRef} width={400} height={300} className="w-full h-full" />
        <AnimatePresence>
          {gameState === "waiting" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <Plane className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mb-2 sm:mb-4" />
              <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">Next Flight In</div>
              <div className="text-3xl sm:text-5xl font-bold text-yellow-400">{countdown}s</div>
            </motion.div>
          )}
          {(gameState === "flying" || gameState === "crashed") && (
            <motion.div
              key="multiplier"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-5xl sm:text-8xl font-bold text-red-500 drop-shadow-glow">
                {multiplier.toFixed(2)}x
              </div>
            </motion.div>
          )}
          {gameState === "crashed" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute inset-x-0 bottom-4 sm:bottom-10 text-center"
            >
              <div className="text-2xl sm:text-4xl font-bold text-red-500 mb-1 sm:mb-2">CRASHED!</div>
              <div className="text-lg sm:text-2xl font-semibold">
                {activeBet > 0 ? "Better luck next time!" : "You cashed out in time!"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Betting Controls */}
      <div className="space-y-2 sm:space-y-4">
        <div className="flex-col items-center gap-2 sm:gap-4">
          <div className="flex-1 bg-gray-800 rounded-lg p-2 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <Button variant="ghost" size="icon" onClick={() => setBetAmount(Math.max(1, betAmount - 1))}>
                <Minus className="w-4 h-4" />
              </Button>
              <div className="text-xl sm:text-2xl font-bold">{betAmount.toFixed(2)}</div>
              <Button variant="ghost" size="icon" onClick={() => setBetAmount(betAmount + 1)}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Slider
              value={[betAmount]}
              min={1}
              max={1000}
              step={1}
              onValueChange={(value) => setBetAmount(value[0])}
              className="my-2 sm:my-4"
            />
            <div className="grid grid-cols-4 gap-1 sm:gap-2">
              {quickBets.map(amount => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  onClick={() => setBetAmount(amount)}
                  className="text-xs sm:text-sm bg-gray-700"
                >
                  {amount.toFixed(2)}
                </Button>
              ))}
            </div>
          </div>
          <Button
            className="flex-1 h-20 sm:h-24 text-xl sm:text-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg gap-4 py-1 w-full"
            onClick={gameState === "flying" ? cashOut : startGame}
            disabled={gameState === "crashed" || (gameState === "waiting" && countdown <= 5)}
          >
            {gameState === "waiting" ? (
              <>
                BET &nbsp;
                
                {betAmount.toFixed(2)} INR
              </>
            ) : gameState === "flying" ? (
              <>
                CASH OUT
                <br />
                {(activeBet * multiplier).toFixed(2)} INR
              </>
            ) : (
              "CRASHED"
            )}
          </Button>
        </div>
      </div>

      {/* Bottom Tabs */}
      <Tabs defaultValue="all" className="mt-2 sm:mt-4">
        <TabsList className="w-full justify-start rounded-lg bg-gray-800">
          <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-gray-700">
            All Bets
          </TabsTrigger>
          <TabsTrigger value="my" className="flex-1 data-[state=active]:bg-gray-700">
            My Bets
          </TabsTrigger>
          <TabsTrigger value="top" className="flex-1 data-[state=active]:bg-gray-700">
            Top
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}