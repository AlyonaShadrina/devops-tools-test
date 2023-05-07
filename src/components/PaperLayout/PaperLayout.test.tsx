import { render } from "@testing-library/react";
import PaperLayout from "./PaperLayout";

it("PaperLayout renders correctly", () => {
  const tree = render(
    <PaperLayout>
      <button>child button</button>
    </PaperLayout>
  );
  expect(tree).toMatchSnapshot();
});
