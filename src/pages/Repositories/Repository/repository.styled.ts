import styled from "styled-components";
import * as Mui from "@mui/material";

interface IconProps {
  spacing?: number;
}

export const Container = styled(Mui.Grid)`
  padding: 15px;
  border-bottom: 1px solid #21262d;
`;

export const Icon = styled.img<IconProps>`
  width: 16px;
  height: 16px;
  margin-right: ${(props) => props.spacing || 0}px;
`;

export const RepoNameContainer = styled(Mui.Grid)`
  cursor: pointer;
  a {
    color: #58a6ff;
    font-family: Segoe UI, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }
  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

export const AuthorAvatar = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 0 1px;
  cursor: pointer;
`;

export const RepoDetail = styled(Mui.Grid)`
  display: flex;
  margin: 2px 0;
  padding-right: 16px;
`;

export const RepoDetailsText = styled(Mui.Typography)`
  color: #8b949e;
`;
