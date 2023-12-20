import {SpecialistTile} from "../../components/organisms/SpecialistTile";
import {render} from "@testing-library/react";
import {SpecialistItem} from "../../types";

export const specialistItem: SpecialistItem = {
    name: "Cora",
    surname: "Hardy",
    rating: 4.2,
    isVoted: false,
    ratingTotalCount: 5,
    id: 0,
    specialization: "surgeon"
}


describe("SpecialistTile tests", () => {
    test("check render correct vote v1", async () => {
        const {queryAllByTestId} = render(<SpecialistTile {...specialistItem} isVoted={true}/>)
        const stars = queryAllByTestId("rating-item")
        expect(stars.filter(item => item.className.includes("active")).length).toBe(4)
    })

    test("check render correct vote v2", async () => {
        const {queryAllByTestId} = render(<SpecialistTile {...specialistItem} rating={3.5} isVoted={true}/>)
        const stars = queryAllByTestId("rating-item")
        expect(stars.filter(item => item.className.includes("active")).length).toBe(4)
    })
})