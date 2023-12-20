import {ActionIcon} from "../../components/molecules/ActionIcon";
import {render} from "@testing-library/react";

describe("ActionIcon test", () => {
    test("basic icon render", async () => {
        const {queryByTestId} = render(<ActionIcon name="favorite" onClick={jest.fn}/>)
        expect(queryByTestId("action_icon-favorite")?.className.trim()).toBe("")
    })

    test("action icon render", async () => {
        const {queryByTestId} = render(<ActionIcon name="favorite" onClick={jest.fn} variant="action"/>)
        expect(queryByTestId("action_icon-favorite")?.className.includes("action")).toBeTruthy()
    })

    test("icon render with status active", async () => {
        const {queryByTestId} = render(<ActionIcon name="favorite" onClick={jest.fn} isActive/>)
        expect(queryByTestId("action_icon-favorite")?.className.includes("selected")).toBeTruthy()
    })
})