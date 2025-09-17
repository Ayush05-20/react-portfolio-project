import {clsx} from "clsx"
import { twMerge } from "tailwind-merge"
export const cn = (...inputs) => {
    // Add your implementation here
    return twMerge(clsx(inputs));
}
