import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-modern py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/logo/black.png"
                alt="Matěj Haták Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Profesionální fotograf zachycující jedinečné momenty vašeho života.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-mne" className="text-sm text-gray-600 hover:text-black transition-colors">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Email: info@matejhatak.cz
              </li>
              <li className="text-sm text-gray-600">
                Tel: +420 123 456 789
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-center text-gray-600">
            © {currentYear} Matěj Haták. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
} 