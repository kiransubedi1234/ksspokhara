import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <Dialog.Overlay
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
              aria-modal="true"
              role="dialog"
            >
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.2)] rounded-2xl p-8 w-[90vw] max-w-2xl max-h-[80vh] overflow-y-auto relative space-y-6"
                >
                  <Dialog.Title className="text-3xl font-bold text-indigo-800 flex items-center gap-2">
                    <motion.span
                      initial={{ y: 0 }}
                      animate={{ y: [-3, 0, -3, 0] }}
                      transition={{ repeat: 1, duration: 0.5 }}
                      className="inline-block"
                    >
                      📣
                    </motion.span>
                    Admission Open!
                  </Dialog.Title>

                  <Dialog.Description className="text-gray-700 text-base leading-relaxed">
                    We are now accepting applications for <strong>Class 11</strong> at{" "}
                    <strong>Kalika Model Secondary School</strong>. Experience world-class
                    education and a bright future.{" "}
                    <span className="text-red-600 font-semibold">Limited seats available.</span>{" "}
                    Apply now!
                  </Dialog.Description>

                  <div className="flex flex-wrap justify-end items-center gap-4">
                    <a
                      href="https://ingrails.com/school/admission/form/kalika-secondary-school?format=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow transition hover:ring-2 hover:ring-red-300 hover:shadow-md"
                    >
                      Apply Now
                    </a>

                    <Dialog.Close asChild>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm shadow hover:bg-indigo-500 transition">
                        Close
                      </button>
                    </Dialog.Close>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition"
                      aria-label="Close"
                    >
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                </motion.div>
              </Dialog.Content>
            </Dialog.Overlay>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}