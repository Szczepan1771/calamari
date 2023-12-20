import {getInitials} from "../utils";

const NAME = "Jacek";
const SURNAME = "Placek"
test("getInitial test", () => {
    const result = getInitials(NAME, SURNAME);
    expect(result).toBe("JP")
    expect(result).toBe("JP")
})