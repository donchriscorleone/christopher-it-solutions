import NavMenuButton from "../MenuButton";

export default function Navbar() {
    const links = [
        { label: 'About', href: '/'},
        { label: 'Service', href: '/'},
        { label: 'Contact', href: '/'}
    ]
    return (
        <>
            <nav className="flex items-center justify-between p-5">
                <div className="flex md:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Christopher I.T Solution</span>
                        <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo of Christopher I.T Solutions" />
                    </a>
                </div>
                <div className="flex md:hidden">
                    <NavMenuButton items={links}/>
                </div>
                <div className="hidden md:flex md:gap-x-12">
                    {links.map(link => {
                        return <a key={link.label} href={link.href} className="text-sm/6 font-semibold text-gray-900">{link.label}</a>
                    })}
                </div>
                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact us <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </>
    ) 
}