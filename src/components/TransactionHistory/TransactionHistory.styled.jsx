import styled from 'styled-components'

export const Table = styled.table`
font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
font-size: 14px;
border-collapse: collapse;
text-align: center;
box-shadow: 0px 2px 4px 2px #aaaaaa50;
color: #696969;
`;

export const Th = styled.th`
    background: #388ed4fa;
     color: white;
     padding: 10px 100px;
     border-style: solid;
     border-width: 0 1px 1px 0;
     border-color: white;
    text-align: center;
`;

export const Tr = styled.tr`
    :nth-child(2n) {
        background: #aaaaaa30
    }
    background: #FFF;

`;

export const Td = styled.td`
    :not(:last-child) {
        border-style: solid;
     border-width: 0 1px 0 0;
     border-color: #aaaaaa60;
    }
    padding: 10px 100px;
`;

// th, td:first-child {
//     background: #AFCDE7;
//     color: white;
//     padding: 10px 20px;
//     }
//     th, td {
//     border-style: solid;
//     border-width: 0 1px 1px 0;
//     border-color: white;
//     }
//     td {
//     background: #D8E6F3;
//     }
//     th:first-child, td:first-child {
//     text-align: left;
//     }