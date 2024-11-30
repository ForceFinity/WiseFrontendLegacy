import ReactDOM from 'react-dom/client';
import HamburgerSVG from './svg/Hamburger';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';


export default function MainNav() {
    return (
        <div className='z-20 w-full'>
            <div className="w-full h-full flex flex-row items-center text-2xl pt-10 px-8 bg-white gap-8">
                    <div className="flex flex-col">
                        <div className="flex flex-row font-bold items-center">
                            <h1 className="text-center">WiseTransport</h1>
                        </div>
                    </div>

                    <div className="flex grow" />

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <HamburgerSVG className="w-16 h-16" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    {/* <User /> */}
                                    <span>Profile</span>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    {/* <CreditCard /> */}
                                    <span>Billing</span>
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    {/* <Settings /> */}
                                    <span>Settings</span>
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        {/* <UserPlus /> */}
                                        <span>Invite users</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                {/* <Mail /> */}
                                                <span>Email</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                {/* <MessageSquare /> */}
                                                <span>Message</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                {/* <PlusCircle /> */}
                                                <span>More...</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    {/* <Plus /> */}
                                    <span>New Team</span>
                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                {/* <Github /> */}
                                <span>GitHub</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                {/* <LifeBuoy /> */}
                                <span>Support</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                {/* <Cloud /> */}
                                <span>API</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                {/* <LogOut /> */}
                                <span>Log out</span>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
        </div>
 
    );
}
