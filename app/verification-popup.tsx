"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Logo from "@/assets/logo.svg";

export function VerificationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already verified
    const isVerified = localStorage.getItem("isVerified");
    if (!isVerified) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("isVerified", "true");
    setOpen(false);
  };

  const handleReject = () => {
    // Redirect or show rejection message
    window.location.href = "https://servier.ru/";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-[640px] gap-8 border-none bg-[#F6F7F9] p-8 sm:rounded-[24px] md:p-12 [&>button]:hidden"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-8">
          <DialogTitle className="flex justify-start">
            <Logo className="h-8 w-auto md:h-10 text-[#24226A]" />
          </DialogTitle>

          <div className="space-y-6 text-left">
            <p className="text-base leading-relaxed text-[#0B0F3E] md:text-lg">
              Информация, размещённая на данном веб-сайте, предназначена только
              для медицинских и фармацевтических работников Российской федерации
              и не может быть использована иными лицами, в том числе для замены
              консультаций со специалистом/врачом.
            </p>
            <p className="text-base font-bold leading-snug text-[#0B0F3E] md:text-xl">
              Вы являетесь медицинским и/или фармацевтическим работником и
              согласны с утверждением выше?
            </p>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <Button
            variant="secondary"
            className="text-base font-semibold md:text-lg"
            onClick={handleReject}
          >
            Нет
          </Button>
          <Button
            className="text-base font-semibold md:text-lg"
            onClick={handleVerify}
          >
            Да
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
