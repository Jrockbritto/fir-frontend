import styled from "styled-components";
const StyledBreadCrumb = styled.div`
  rect,
  path,
  svg {
    stroke: #0ca37e;
  }

  .applied {
    path,
    rect {
      stroke: grey;
    }
    span {
      color: grey !important;
    }
  }
  .link {
    gap: 0.5rem;
    color: #0ca37e;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    justify-content: baseline;
    align-items: center;
  }
  .active {
    color: #0ca37e;
  }
  .text {
    margin-top: -10rem !important;
  }
`;

export { StyledBreadCrumb };
