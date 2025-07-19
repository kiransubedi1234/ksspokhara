import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center">
          <Dialog.Content asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl p-10 shadow-2xl w-[90vw] max-w-4xl max-h-[80vh] overflow-y-auto relative"
            >
              <Dialog.Title className="text-3xl font-bold text-indigo-800 mb-4">
                📣 Admission Open!
              </Dialog.Title>

              <Dialog.Description className="text-gray-700 text-base leading-relaxed">
                We are now accepting applications for <strong>Class 11</strong> at
                <strong> Kalika Model Secondary School</strong>. Experience world-class
                education and a bright future. Limited seats available. Apply now!
              </Dialog.Description>

              <div className="mt-6 flex justify-end space-x-3 items-center">
  <a
    href="https://ingrails.com/school/admission/form/kalika-secondary-school?format=2"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow transition"
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
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </motion.div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
