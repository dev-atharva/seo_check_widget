import { create } from "zustand";

interface ModalStateprops {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<ModalStateprops>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
