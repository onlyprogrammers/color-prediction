import { Trophy, Gift, Gamepad2, Coins, Fish, Dices, User } from "lucide-react"
import { Button } from "@/components/ui/button";


export default function Navbar() {
    return (
        <>
        

            <nav className="fixed py-3 bottom-0 left-0 right-0 border-t border-gray-800 bg-[#1a237e]/80 backdrop-blur-sm p-1">
                <div className="flex items-center justify-around max-w-6xl mx-auto">
                    {[
                        { icon: <Gamepad2 className="h-7 w-7" />, label: "Games" },
                        { icon: <Dices className="h-7 w-7" />, label: "Ludo" },
                        { icon: <Trophy className="h-7 w-7" />, label: "Sports" },
                        { icon: <Coins className="h-7 w-7" />, label: "Casino" },
                        { icon: <User className="h-7 w-7" />, label: "Profile" },
                    ].map((item, index) => (
                        <Button key={index} variant="ghost" size="sm" className="flex scale-125 flex-col items-center gap-1 hover:bg-gray-800 transition-all duration-300 py-2 text-white">
                            {item.icon}
                            <span className="text-xs">{item.label}</span>
                        </Button>
                    ))}
                </div>
            </nav>
        </>
    )
}