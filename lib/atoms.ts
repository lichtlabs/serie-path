import { atomWithStorage, createJSONStorage } from "jotai/utils"

export const storage = createJSONStorage(() => sessionStorage)
export const providerAtom = atomWithStorage("provider", {}, storage)
