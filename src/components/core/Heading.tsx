import styled from "styled-components";

type IHeadingProps = {
  title: string;
  className?: string;
};
function MainHeading({ title }: IHeadingProps) {
  return (
    <ContentTitle>
      <h1> {title || "Add a title"} </h1>
    </ContentTitle>
  );
}

export default MainHeading;

export function FirstHeading({ title }: IHeadingProps) {
  return (
    <ContentTitle>
      <h2> {title || ""} </h2>
    </ContentTitle>
  );
}

export function SecondHeading({ title }: IHeadingProps) {
  return (
    <ContentTitle>
      <h3 className="font-bold"> {title || "Add a title"} </h3>
    </ContentTitle>
  );
}

export function LastHeading({ title, className }: IHeadingProps) {
  return (
    <ContentTitle>
      <h4 className={`${className} font-bold text-sm`}>
        {" "}
        {title || "Add a title"}{" "}
      </h4>
    </ContentTitle>
  );
}
export const ContentTitle = styled.div`
  margin: 10px;
  margin-top: 4px;
  margin-bottom: 0px;

  & h1 {
    font-size: 1.7em;
  }
  & h2 {
    font-size: 1.6em;
  }
  & h3 {
    font-size: 0.8em;
  }
  // & h4 {
  //   font-size: 0.8em;
  //   font-weight: 600;
  // }
`;
