import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

const Alert = ({
  btnTitle,
  alertMessage,
  alertDescription,
  onConfirm,
  cancelBtnTitle,
  confirmBtnTitle,
  btnStyle,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={btnStyle}>{btnTitle}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertMessage}</AlertDialogTitle>
          <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelBtnTitle}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#e50914] hover:bg-red-700"
            onClick={onConfirm}
          >
            {confirmBtnTitle}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
