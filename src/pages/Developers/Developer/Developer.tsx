import React, { memo } from "react";

import * as Mui from "@mui/material";

import PopularRepo from "@images/PopularRepo.svg";
import Repository from "@images/Repository.svg";

import DevelopersInterface from "@/shared/interface/developer";

import ListButton from "@ui/ListButton";

import {
  Container,
  Ranking,
  ProfilePicture,
  ProfileName,
  Icon,
  RepoDescription,
  RepoLink,
} from "./developer.styled";

const Developer = memo(
  ({
    username,
    name,
    rank,
    url,
    popularRepository,
    avatar,
  }: DevelopersInterface) => (
    <Container container id={username}>
      <Mui.Grid item xs={4}>
        <Mui.Grid container>
          <Ranking href={url} target="_blank" rel="noreferrer">
            {rank}
          </Ranking>
          <ProfilePicture>
            <a href={url} target="_blank" rel="noreferrer">
              <img src={avatar} alt={name} />
            </a>
          </ProfilePicture>
          <Mui.Grid item>
            <Mui.Grid container direction="column">
              <ProfileName
                type="name"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </ProfileName>
              <ProfileName
                type="username"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {username}
              </ProfileName>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid item xs={8}>
        <Mui.Grid container alignItems="center" style={{ height: "100%" }}>
          <Mui.Grid item sm={9}>
            <Mui.Grid container>
              {popularRepository.repositoryName && (
                <>
                  <Icon spacing={5} src={PopularRepo} alt="" />
                  <RepoDescription
                    marginY="5px"
                    fontSize="12px"
                    fontWeight={400}
                    fontFamily="Segoe UI"
                  >
                    POPULAR REPO
                  </RepoDescription>
                </>
              )}
            </Mui.Grid>
            <Mui.Grid>
              {popularRepository.repositoryName && (
                <>
                  <RepoLink
                    href={popularRepository.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon spacing={5} src={Repository} alt="" />{" "}
                    {popularRepository.repositoryName}
                  </RepoLink>
                </>
              )}
            </Mui.Grid>
            <RepoDescription
              marginY="5px"
              fontSize="12px"
              fontWeight={400}
              fontFamily="Segoe UI"
            >
              {/* API always returns `null` */}
              {popularRepository.description}
            </RepoDescription>
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={3}>
            <Mui.Grid container justifyContent="flex-end">
              <ListButton>Follow</ListButton>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  )
);

export default Developer;
