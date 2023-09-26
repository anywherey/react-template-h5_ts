import mountTest from "~test/mountTest";
import Comment from "@/components/Comment/index";
import renderer from "react-test-renderer";
mountTest(Comment);
test("Match Snapshot", () => {
  const component = renderer.create(<Comment />);
  const toolbar = component.toJSON();
  expect(toolbar).toMatchSnapshot();
});
