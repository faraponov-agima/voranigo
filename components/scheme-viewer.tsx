"use client";

import * as React from "react";
import { ReactInfiniteCanvas } from "react-infinite-canvas";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SchemeViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function SchemeViewer({ open, onOpenChange, children }: SchemeViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] h-[80vh] p-0 gap-0 border-none bg-background sm:rounded-xl overflow-hidden">
        <DialogTitle className="sr-only">Просмотр схемы</DialogTitle>
        <DialogDescription className="sr-only">
          Интерактивный просмотр схемы с возможностью масштабирования и перемещения
        </DialogDescription>
        
        <div className="absolute right-4 top-4 z-50">
          <DialogClose asChild>
            <Button variant="secondary" size="icon" className="rounded-full opacity-70 hover:opacity-100">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>
        
        <div className="w-full h-full bg-[#F6F7F9]">
            <ReactInfiniteCanvas
              onCanvasMount={(mountFunc) => {
                setTimeout(() => {
                  mountFunc.fitContentToView({ scale: 0.8 });
                }, 100);
              }}
            >
                {/* Wrapper div to ensure the content has dimensions */}
                <div className="inline-block p-20">
                  {children}
                </div>
            </ReactInfiniteCanvas>
        </div>
      </DialogContent>
    </Dialog>
  );
}
