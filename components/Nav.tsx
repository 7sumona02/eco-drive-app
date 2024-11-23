import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 bg-floralWhite h-[4.2rem]">
      <div className="fade-bottom absolute left-0 w-full"></div>
      <div className="relative mx-auto max-w-container text-jet md:px-14 px-2">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              Brand
            </Link>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <Link href="/" className="hidden text-sm md:block">
              Sign in
            </Link>
            <Button className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-full bg-jet text-white" asChild>
              <Link href="/">Get Started</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Launch UI</span>
                  </Link>
                  <Link
                    href="/"
                    className="text-jet hover:text-jet/80"
                  >
                    Getting Started
                  </Link>
                  <Link
                    href="/"
                    className="text-jet hover:text-jet/80"
                  >
                    Components
                  </Link>
                  <Link
                    href="/"
                    className="text-jet hover:text-jet/80"
                  >
                    Documentation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
