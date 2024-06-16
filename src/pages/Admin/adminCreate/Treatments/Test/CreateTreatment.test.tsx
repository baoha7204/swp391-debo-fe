import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CreateTreatmentForm from "../CreateTreatmentForm"

describe("Create Treatment Form", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <CreateTreatmentForm />
            </BrowserRouter>
        )
    })
});
it("should display required error when value is blank", async () => {
    //Arrange
    const { getByTestId, findByText } = screen;

    //Act
    fireEvent.click(getByTestId("create"));
    const idErrorMsg = await findByText("ID must be at least 1")

})