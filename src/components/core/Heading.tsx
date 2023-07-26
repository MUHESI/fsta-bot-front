import styled from "styled-components";

function MainHeading({ title }: any) {
  return (
    <ContentTitle>
      <h1> {title || "Add a title"} </h1>
    </ContentTitle>
  );
}

export default MainHeading;

export function FirstHeading({ title }: any) {
  return (
    <ContentTitle>
      <h2> {title || ""} </h2>
    </ContentTitle>
  );
}

export function SecondHeading({ title }: any) {
  return (
    <ContentTitle>
      <h3> {title || "Add a title"} </h3>
    </ContentTitle>
  );
}

export function LastHeading({ title }: any) {
  return (
    <ContentTitle>
      <h4 className="font-bold text-xl"> {title || "Add a title"} </h4>
    </ContentTitle>
  );
}
export const ContentTitle = styled.div`
  margin: 10px;

  & h1 {
    font-size: 1.7em;
  }
  & h2 {
    font-size: 1.6em;
  }
  & h3 {
    font-size: 1.4em;
  }
  // & h4 {
  //   font-size: 0.8em;
  //   font-weight: 600;
  // }
`;
