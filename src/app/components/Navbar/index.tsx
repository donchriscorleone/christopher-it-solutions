import NavMenuButton from "../MenuButton";

export default function Navbar() {
    const links = [
        // { label: 'About', href: '#about'},
        { label: 'Services', href: '#services'},
        { label: 'Pricing', href: '#pricing'},
        { label: 'Contact', href: '#contact'}
    ]
    return (
        <>
            <nav className="flex items-center justify-between p-5 container mx-auto">
                {/* <div className="flex md:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Christopher I.T Solution</span>
                        <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo of Christopher I.T Solutions" />
                    </a>
                </div> */}
                <div className="flex md:hidden">
                    <NavMenuButton items={links}/>
                </div>
                <div className="hidden md:flex md:gap-x-12">
                    {links.map(link => {
                        return <a key={link.label} href={link.href} className="font-semibold">{link.label}</a>
                    })}
                </div>
                <div className="flex flex-1 justify-end">
                    <a href="https://www.facebook.com/christopheritsolutions" target="blank" className="font-semibold">Contact us <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </>
    ) 
}