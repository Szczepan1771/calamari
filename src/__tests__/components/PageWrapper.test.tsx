import {PageHeader} from "../../components/molecules/PageHeader"
import {render} from "@testing-library/react";

describe("PageHeader tests", () => {
    test("render with searchbar", async() => {
        const {queryByRole} = render(<PageHeader label="Test label" filterFunction={() => jest.fn()}/>)
        expect(queryByRole("textbox")).toBeDefined()
    })
    test("render without searchbar", async() => {
        const {queryByRole} = render(<PageHeader label="Test label"/>)
        expect(queryByRole("textbox")).toBeNull()
    })
})