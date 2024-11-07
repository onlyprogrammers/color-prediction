'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Eye, EyeOff, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'

export default function EnhancedLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState('phone')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
      <div className="container px-4 py-4">
        <div className="mb-4 flex items-center">
          <Button variant="ghost" className="text-white hover:text-white/80">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="mx-auto text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Tiranga
          </div>
        </div>

        <div className="mx-auto max-w-md space-y-6 bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-xl">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Log in</h1>
            <p className="text-gray-300">
              Please log in with your phone number or email
            </p>
          </div>

          <Tabs defaultValue="phone" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-2 bg-indigo-800/50 rounded-lg p-1">
              <TabsTrigger
                value="phone"
                className="rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                onClick={() => setLoginType('phone')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Phone
              </TabsTrigger>
              <TabsTrigger
                value="email"
                className="rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                onClick={() => setLoginType('email')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phone" className="space-y-3 mt-3">
              <div className="space-y-1">
                <label className="text-lg font-medium">Phone number</label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="w-24 border-white/20 text-white hover:bg-white/10"
                  >
                    +91
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className="flex-1 border-white/20 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-3 mt-3">
              <div className="space-y-1">
                <label className="text-lg font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-white/20 bg-white/5 text-white placeholder:text-gray-400"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-1">
            <label className="text-lg font-medium">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="border-white/20 bg-white/5 pr-10 text-white placeholder:text-gray-400"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-white/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
            Log in
          </Button>

          <div className="text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <Link href="/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </div>

          <div className="pt-2 text-center">
            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              Customer Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}