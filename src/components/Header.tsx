// export component

import { LogoComponent } from './Logo'

export function Header() {
  return (
    <header className='w-screen flex justify-center bg-gray-700 py-12'>
      <LogoComponent />
    </header>
  )
}
