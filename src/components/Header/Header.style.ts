import styled from "styled-components";
const StyledHeader = styled.div`
  header {
    display: flex;
    width: 100%;
    height: 3.75rem;
    padding: 0.5rem 0.9375rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid var(--cool-gray-20, #dde1e6);
    background: #f7f8f9;
    position: absolute;
  }
`;
const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export { StyledHeader, StyledButtons };
