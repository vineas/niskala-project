import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image';
import logoNiskala from '../../../src/assets/img/logo/niskala-logo.png';

const navigation = [
    { name: 'About', href: '/about', current: true },
    { name: 'Portofolio', href: '/portofolio', current: false },
    { name: 'Contact Us', href: 'contact', current: false },
]

const NavBar = () => {
    return (
        <>
            <Disclosure as="nav" className="bg-black">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                    <Image
                                        src={logoNiskala}
                                        alt="Niskala Studio"
                                        className="h-16 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <DisclosureButton
                                    as="button"
                                    aria-current={item.current ? 'page' : undefined}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black"
                                >
                                    {item.name}
                                </DisclosureButton>
                            </Link>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

export default NavBar