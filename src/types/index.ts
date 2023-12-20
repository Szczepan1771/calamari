import {ALL_FAVORITE_PATH, MY_SPECIALIST_PATH} from "../utils/routes";

export type NavLinkToType = typeof ALL_FAVORITE_PATH | typeof MY_SPECIALIST_PATH

export interface NavItemType {
    to: NavLinkToType
    label: string
}

export type ID = number

export type IconType = "favorite" | "notifications" | "star" | "calendar_today" | "face" | "mail" | "more_horiz" | "search"

export type IconSizeType = 20 | 24

export type RatingType = 1 | 2 | 3 | 4 | 5
export interface SpecialistItem {
    id: ID
    name: string
    surname: string
    rating: number
    ratingTotalCount: number
    specialization: string
    isVoted: boolean
    photo?: string
}