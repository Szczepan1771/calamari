import {AvatarComponent} from "../../components/atoms/AvatarComponent";
import {render} from "@testing-library/react";

const INITIALS = "SS"
describe("Avatar component test", () => {
    test("render initials", () => {
        const {queryByText} = render(<AvatarComponent id={0} initials={INITIALS}/>)
        const element = queryByText(INITIALS);
        expect(element).toBeDefined()
    })
    test("render image", () => {
        const {queryByRole, queryByText} = render(<AvatarComponent id={1} initials={INITIALS} avatar="custom.jpg"/>)
        const element = queryByRole("img");
        expect(queryByText(INITIALS)).toBeNull()
        expect(element).toBeDefined()
    })
})