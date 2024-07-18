import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const SheetMenu = ({
  triggerBtn,
  title,
  description,
  image,
  content,
  footer,
  closeSheet,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{triggerBtn}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col items-center">
          <SheetClose asChild>{closeSheet}</SheetClose>
          <SheetTitle>{title}</SheetTitle>
          {image}
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {content}
      </SheetContent>
      <SheetFooter>{footer}</SheetFooter>
    </Sheet>
  );
};

export default SheetMenu;
