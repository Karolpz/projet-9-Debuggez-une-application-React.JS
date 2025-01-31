import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

const mockData = {
  events: [
    {
      id : 1,
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id : 2,
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id : 3,
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />)
    const events = screen.getByTestId("events-container");
    expect(events.children.length).toBeGreaterThan(1);
  })
  it("a list a people is displayed", () => {
    render(<Home />)
    const peopleCards = screen.getAllByTestId("people-card")
    expect(peopleCards.length).toBeGreaterThan(0)
  })
  it("a footer is displayed", () => {
    render(<Home />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument();
  })
    it("an event card, with the last event, is displayed", () => {
      render(<Home />)
      const lastEvent = screen.getByTestId("last-event");
      expect(lastEvent.children.length).toBeGreaterThan(1);

    })
  })







