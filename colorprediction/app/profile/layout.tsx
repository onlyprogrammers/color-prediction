import { Trophy, Gift, Gamepad2, Coins, Fish, } from "lucide-react"
import { Button } from "@/components/ui/button";


export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}

            <nav className="fixed py-3 bottom-0 left-0 right-0 border-t border-gray-800 bg-[#070B34]/80 backdrop-blur-sm p-1">
                <div className="flex items-center justify-around max-w-6xl mx-auto">
                    {[
                        { icon: <Gamepad2 className="h-7 w-7" />, label: "Games" },
                        { icon: <Gift className="h-7 w-7" />, label: "Lottery" },
                        { icon: <Trophy className="h-7 w-7" />, label: "Sports" },
                        { icon: <Coins className="h-7 w-7" />, label: "Casino" },
                        { icon: <Fish className="h-7 w-7" />, label: "Fishing" },
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