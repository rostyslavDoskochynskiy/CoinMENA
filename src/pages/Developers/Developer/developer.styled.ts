import styled from "styled-components";
import * as Mui from "@mui/material";

interface ProfileNameProps {
  type: "name" | "username";
}

interface IconProps {
  spacing?: number;
}

export const Container = styled(Mui.Grid)`
  padding: 15px;
  border-bottom: 1px solid #21262d;
`;

export const Ranking = styled.a`
  font-family: Segoe UI, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #8b949e;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProfilePicture = styled.div`
  margin: 0 10px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const ProfileName = styled.a<ProfileNameProps>`
  font-family: Segoe UI, sans-serif;
  font-size: ${({ type }) => (type === "name" ? "20" : "16")}px;
  font-weight: ${({ type }) => (type === "name" ? "600" : "400")};
  color: ${({ type }) => (type === "name" ? "#58a6ff" : "#646c75")};
  text-decoration: none;
  &:hover {
    color: #58a6ff;
    text-decoration: underline;
  }
`;

export const Icon = styled.img<IconProps>`
  width: 16px;
  height: 16px;
  margin-right: ${(props) => props.spacing ?? 0}px;
  margin-top: auto;
  margin-bottom: auto;
  vertical-align: text-bottom;
`;

export const RepoDescription = styled(Mui.Typography)`
  font-family: Segoe UI, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #8b949e;
`;

export const RepoLink = styled.a`
  color: #5198eb;
  text-decoration: none;
  font-family: Segoe UI, sans-serif;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
