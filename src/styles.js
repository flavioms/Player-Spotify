import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  background: #ccc;
  padding: 12px;
  border-radius: 6px;
`;
export const Title = styled.h1`
  font-size: 1.6em;
  color: #333;
`;
export const Artist = styled.h2`
  font-size: 1em;
  color: #666;
`;
export const Cover = styled.img`
  width: 100%;
`;
