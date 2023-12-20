import {RatingComponent} from "../../components/molecules/RatingComponent";
import {render} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import clearAllMocks = jest.clearAllMocks;

const SELECTED_RATING = 1

describe("Rating component tests", () => {
    const mockOnClick = jest.fn()
    beforeEach(() => {
        clearAllMocks()
    })
    test("voting for a specialist if no vote was cast", async () => {
        const {queryAllByTestId} = render(<RatingComponent rating={0} isVoted={false} onClick={mockOnClick}/>)
        const stars = queryAllByTestId("rating-item")
        await userEvent.click(stars[SELECTED_RATING - 1])
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
    test("voting for a specialist if a vote was cast", async () => {
        const {queryAllByTestId} = render(<RatingComponent rating={0} isVoted={true} onClick={mockOnClick}/>)
        const stars = queryAllByTestId("rating-item")
        await userEvent.click(stars[SELECTED_RATING - 1])
        expect(mockOnClick).toHaveBeenCalledTimes(0)
    })
    test("hover action", async() => {
        const {queryAllByTestId} = render(<RatingComponent rating={0} isVoted={false} onClick={mockOnClick}/>)
        const stars = queryAllByTestId("rating-item")
        await userEvent.hover(stars[3])
        expect(stars.filter(item => item.className.includes("active")).length + 1).toBe(4)
    })
})