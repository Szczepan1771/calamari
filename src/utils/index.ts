import {NavItemType} from "../types";
import {ALL_FAVORITE_PATH, MY_SPECIALIST_PATH} from "./routes";

export const navigationConfig: NavItemType[] = [
    {
        to: ALL_FAVORITE_PATH,
        label: "All favorite"
    },
    {
        to: MY_SPECIALIST_PATH,
        label: "My specialist"
    }
]

export const PAGE_SIZE = 40