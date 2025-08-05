import { atomWithStorage, createJSONStorage } from "jotai/utils"

export const storage = createJSONStorage(() => localStorage)
export const providerAtom = atomWithStorage("provider", null, storage)
