import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
  return (
    <div className="flex items-center p-[10px] justify-between">
      <Sheet>
        <SheetTrigger>
          <div className="bg-white p-[10px] rounded-3xl">
            <GiHamburgerMenu className="" />
          </div>
        </SheetTrigger>
        <SheetContent className='bg-darkerBlue'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className='text-white '>
        LOGO
      </div>
      <div className='bg-white p-[10px] rounded-full'>
        <p>Ahh</p>
      </div>
    </div>
  );
}
