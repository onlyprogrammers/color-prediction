'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Eye, EyeOff, Lock, Phone, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function AttractiveRegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2875] to-[#3a1e75] text-white">
      <div className="container max-w-md px-3 py-3">
        <div className="mb-6 flex items-center">
          <Button onClick={window.history.go(-1)} variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </Button>

        </div>

        
        <div className="flex items-center justify-center gap-2 border-b-2 mb-4 border-blue-400">


          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <Phone className="h-6 w-6 text-blue-400" />
            </div>
          </div>
          <h2 className="mb-4 text-center text-lg text-blue-400 font-semibold">
            Register your phone
          </h2>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>Phone number</span>
            </label>
            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[90px] h-10 bg-white/10 border-white/20 text-white focus:ring-blue-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2a357d] border-white/20">
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="tel"
                placeholder="Please enter the phone number"
                className="flex-1 h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Lock className="h-5 w-5 text-blue-400" />
              <span>Set password</span>
            </label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Set password"
                className="pr-10 h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
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

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Lock className="h-5 w-5 text-blue-400" />
              <span>Confirm password</span>
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                className="pr-10 h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <User className="h-5 w-5 text-blue-400" />
              <span>Invite code</span>
            </label>
            <Input
              type="text"
              placeholder="Please enter the invitation code"
              className="h-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="privacy" className="border-white/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
            <label htmlFor="privacy" className="text-sm">
              I have read and agree{' '}
              <Link href="#" className="text-blue-400 hover:underline">
                [Privacy Agreement]
              </Link>
            </label>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-base h-10 font-medium transition-all duration-300 transform hover:scale-105">
            Register
          </Button>

          <div className="text-center">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              I have an account{' '}
              <span className="text-blue-400 hover:underline font-medium">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}