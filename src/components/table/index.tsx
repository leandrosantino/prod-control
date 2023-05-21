import styled from "styled-components";

export const Table = styled.table`
  display: grid;
  height: calc(100% - 70px);
  grid-template-areas:
    "head"
    "body"
  ;
  grid-template-rows: 40px auto 30px;

  thead{
    grid-area: "head";
    tr{
      height: 100%;
      border: none;
      background-color: #8a8a8a;
      padding-right: 20px;

      th{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  tbody{
    grid-area: "body";
    overflow-y: scroll;
    .scrollbarOn{
      background:yellow;
    }
  }

  tr{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 1px solid black;

    td, th{
      height: 100%;
      font-size: 12px;
      width: 220px;

      &:nth-child(n+3){
        width: 130px;
        text-align: center;
      }
      &:last-child{
        width: 60px;
      }


    }
  }

`
