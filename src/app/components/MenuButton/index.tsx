import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  Bars3Icon
} from '@heroicons/react/16/solid'

export default function NavMenuButton({ items }: { items?: Array<any>}) {
  return (
    <Menu>
      <MenuButton>
        <span className='sr-only'>Menu button</span>
        <Bars3Icon className='size-5 fill-black'/>
      </MenuButton>
      <MenuItems anchor="bottom end" 
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
        {items?.map((item, index) => {
          return (
            <MenuItem key={`menu ${item.label} ${index}`}>
              <a className="text-sm/6 font-semibold text-gray-900" href={item.href}>
                {item.label}
              </a>
            </MenuItem>
          )
        })}
      </MenuItems>
    </Menu>
  )
}
