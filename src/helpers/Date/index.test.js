import { getMonth } from "../../helpers/Date";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            expect(getMonth(new Date("2022-01-01"))).toEqual("janvier")
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            expect(getMonth(new Date("2022-07-08"))).toEqual("juillet")
        });
        it("there is a typing error on the data", () => {
            expect(getMonth(new Date("2022-077-08"))).toBeUndefined()
        })
    });
})

