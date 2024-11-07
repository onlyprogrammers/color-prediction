'use client'

import { useState } from "react"
import Image from "next/image"
import { Bell, ChevronRight, Gift, History, Home, LayoutGrid, LogOut, Settings, User, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function EnhancedProfilePage() {
  const [activeTab, setActiveTab] = useState("Account")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a237e] to-[#0d47a1] text-white overflow-hidden">
      {/* Profile Header */}
      <div className="relative h-28 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden mb-7">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-start gap-4">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute -top-1 -right-1 bg-yellow-500 text-xs px-2 py-1 rounded-full shadow-md">VIP</div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold">MEMBERNNFRILX</h1>
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full shadow-md">UID: 16915888</span>
            </div>
            <p className="text-sm text-gray-200">Last login: 2024-11-07 13:36:08</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="p-6 bg-gradient-to-br from-[#283593] to-[#1e88e5] border-none rounded-xl shadow-xl">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-300">Total balance</p>
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              ₹0.00
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <History className="h-5 w-5" />
              </Button>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {[
              { icon: <Wallet className="h-6 w-6" />, label: "Wallet" },
              { icon: <LayoutGrid className="h-6 w-6" />, label: "Deposit" },
              { icon: <History className="h-6 w-6" />, label: "Withdraw" },
              { icon: <Gift className="h-6 w-6" />, label: "VIP" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto py-2 bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105"
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Safe Section */}
        <Card className="p-4 bg-gradient-to-br from-[#283593] to-[#1e88e5] border-none rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 p-2 rounded-full shadow-md">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Safe</h3>
                <p className="text-xs text-gray-300">The daily interest rate is 0.1%, and the income is calculated once every 1 minute.</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span>₹0.00</span>
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2 py-2">
          {[
            { icon: <History className="h-5 w-5" />, label: "Game History", sublabel: "My game history" },
            { icon: <History className="h-5 w-5" />, label: "Transaction", sublabel: "My transaction history" },
            { icon: <Wallet className="h-5 w-5" />, label: "Deposit", sublabel: "My deposit history" },
            { icon: <Wallet className="h-5 w-5" />, label: "Withdraw", sublabel: "My withdraw history" },
            { icon: <Bell className="h-5 w-5" />, label: "Notification", badge: 1 },
            { icon: <Gift className="h-5 w-5" />, label: "Gifts" },
            { icon: <LayoutGrid className="h-5 w-5" />, label: "Game statistics" },
            { icon: <Settings className="h-5 w-5" />, label: "Language", value: "English" },
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-between bg-white/10 hover:bg-white/20 transition-all rounded-xl  py-3 "
            >
              <div className="flex items-center gap-3 py-2">
                {item.icon}
                <div className="text-left">
                  <div>{item.label}</div>
                  {item.sublabel && (
                    <div className="text-xs text-gray-300">{item.sublabel}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.value && <span className="text-gray-300">{item.value}</span>}
                <ChevronRight className="h-5 w-5" />
              </div>
            </Button>
          ))}
        </div>

        {/* Service Center */}
        <Card className="p-6 bg-gradient-to-br from-[#283593] to-[#1e88e5] border-none rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Service center</h3>
          <div className="grid grid-cols-3 gap-1">
            {[
              { icon: <Settings className="h-6 w-6" />, label: "Settings" },
              { icon: <History className="h-6 w-6" />, label: "Feedback" },
              { icon: <Bell className="h-6 w-6" />, label: "Notification" },
              { icon: <User className="h-6 w-6" />, label: "Customer Service" },
              { icon: <Gift className="h-6 w-6" />, label: "Beginner's Guide" },
              { icon: <Settings className="h-6 w-6" />, label: "About us" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col whitespace-nowrap items-center gap-1 h-auto py-3 bg-white/10 hover:bg-white/20 transition-all transform hover:scale-105 rounded-xl "
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          variant="ghost"
          className="w-full bg-red-500 hover:bg-red-600 transition-colors py-6 text-lg font-semibold rounded-xl mb-14"
          style={{marginBottom:'50px'}}
        >
          <LogOut className="h-6 w-6 mr-2" />
          Log out
        </Button>
      </div>

      {/* Bottom Navigation */}
      
    </div>
  )
}