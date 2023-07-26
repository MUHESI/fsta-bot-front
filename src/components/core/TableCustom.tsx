import React from "react";
// import { styleTheme } from "../../../styles/theme";
import styled from "styled-components";

export const styleTheme = {
  colors: {
    blueDark: "#2DAEC4",
    blueLight: " #253f9a",
    redLight: " #cb0000",

    grayLight: "gray",
    grayDark: " rgba(0, 0, 0, 0.05)",
    white: "white",
    colorTabHover: "#e6e6e6",
    grayColor: "gray",
    successDark: "#3bb077",
    errorDark: "#d95087",
    grisHover: "#F4F2FA",
  },
  borderColors: {
    mainCOlor: "rgba(0, 0, 0, 0.05)",
  },
};

export const img =
  "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function TableCustom() {
  const columns = ["NOMS", "DATE ENREGIST.", "FICHE", "ADRESSE", "ABONNE"];

  return (
    <ContentTable>
      <Table>
        <ColumnsTable columns={columns} />
        <WidgetLgTrRows>
          {/* <WidgetTdUser>
            <ImgUser src={img} alt="..." />
            <TextUser> @Muhesi Moses </TextUser>
            <WidgetTd> 12/04/2022 </WidgetTd>
          </WidgetTdUser> */}
          <WidgetTd> @Muhesi Moses </WidgetTd>
          <WidgetTd> 12/04/2022 </WidgetTd>
          <WidgetTd> 12-GOAM-2022 </WidgetTd>
          <WidgetTd> HIMBI2 </WidgetTd>
          <WidgetTd bgColor={"#3bb077"}> NON </WidgetTd>
        </WidgetLgTrRows>
      </Table>
    </ContentTable>
  );
}

export default TableCustom;

export function ColumnsTable({ columns, indexOfLongText }: any) {
  return (
    <>
      <WidgetLgTrColumns>
        {columns.map((column: any, key: number) => (
          <ColumnTh
            // isLongText
            className="text-center text-lg border-b mb-[10px]"
            key={key}
            // isLongText={indexOfLongText === key + 1 ? true : false}
            style={
              {
                //  text-align: center; //
                // border-bottom: 1px solid #000;
                // margin-bottom: 10px;
              }
            }
          >
            {column}
          </ColumnTh>
        ))}
      </WidgetLgTrColumns>
    </>
  );
}

export const MainTitleTable = ({ title }: { title: string }) => {
  return <h3 className="widgetLgTitle"> {title || ""} </h3>;
};
export const ContentTable = styled.div`
  flex: 2;
  padding: 20px 0;
  & td {
    padding: 10px 0px;
    border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
  }
  & th {
    padding: 15px 0px;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  text-align: center;
`;

export const WidgetLgTrRows = styled.tr`
  padding: 10px 0px;

  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: ${styleTheme.colors.colorTabHover};
  }
`;
export const WidgetTdUser = styled.td`
  margin-left: 10px;
  font-size: 0.5em;
  justify-content: start;
  display: flex;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
`;
export const ImgUser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const TextUser = styled.span``;
export const WidgetTd = styled.td<{
  bgColor?: string | undefined;
  textColor?: string | undefined;
}>`
  font-size: 0.5em;
  height: 10px;
  color: ${({ textColor }) => (textColor ? textColor : "")};
  font-weight: ${({ textColor }) => (textColor ? "bold" : "400")};
  // border: 1px solid ${({ textColor }) => (textColor ? textColor : "none")};
  border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
  // background-color: ${({ bgColor }) => (bgColor ? "#e5faf2" : "none")};
`;

export const WidgetLgTrColumns = styled.tr`
  padding: 2px 0px;

  transition: all 0.3s ease;
  padding: 20px;
  // margin-bottom: 50px;
  color: ${styleTheme.colors.white};
  // font-size: 1em;
  font-size: 0.8em;
  background-color: ${styleTheme.colors.blueDark};
  & th {
    text-align: center;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
    padding: 8px 0px;
  }
`;
const ColumnTh = styled.th<{ isLongText?: boolean }>`
  &:first-child {
    padding-left: ${({ isLongText }) => isLongText && "10px"};
    padding-left: ${({ isLongText }) => isLongText && "left"};
  }
`;

/** 
 * todo Styling of action 
 * @param {}
 * .widgetLgButton.Approved {
  background-color: #e5faf2;
  color: #3bb077;
}
.widgetLgButton.Declined {
  background-color: #fff0f1;
  color: #d95087;
}
.widgetLgButton.Pending {
  background-color: #ebf1fe;
  color: #2a7ade;
}
 */
