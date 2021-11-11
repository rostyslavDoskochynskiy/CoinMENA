import React, { memo } from "react";

import * as Mui from "@mui/material";

import Fork from "@images/Fork.svg";
import Star from "@images/Star.svg";
import RepositoryIcon from "@images/Repository.svg";

import ListButton from "@ui/ListButton";

import RepositoryInterface from "@/shared/interface/repository";

import {
  Container,
  RepoNameContainer,
  Icon,
  RepoDetailsText,
  RepoDetail,
  AuthorAvatar,
} from "./repository.styled";

const Repository = memo(
  ({
    username,
    repositoryName,
    url,
    description,
    language,
    totalStars,
    forks,
    starsSince,
    builtBy,
  }: RepositoryInterface) => (
    <Container container flexDirection="column">
      <Mui.Grid container justifyContent="space-between">
        <Mui.Grid item xs={10}>
          <RepoNameContainer container alignItems="flex-end">
            <Icon spacing={4} src={RepositoryIcon} alt="repository" />
            <a href={url} target="_blank" rel="noreferrer">
              {username} / {repositoryName}
            </a>
          </RepoNameContainer>
        </Mui.Grid>
        <Mui.Grid item>
          <ListButton>
            <Icon spacing={2} src={Star} alt="star" /> <span>Star</span>
          </ListButton>
        </Mui.Grid>
      </Mui.Grid>
      <RepoDetailsText marginY="4px" fontSize="12px" fontFamily="Segoe UI">
        {description}
      </RepoDetailsText>
      <Mui.Grid container marginTop="12px">
        <RepoDetail>
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {language}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Star} alt="star" />
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {totalStars}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Icon spacing={2} src={Fork} alt="fork" />
          <RepoDetailsText
            lineHeight={1.3}
            fontSize="12px"
            fontFamily="Segoe UI"
          >
            {forks}
          </RepoDetailsText>
        </RepoDetail>
        <RepoDetail>
          <Mui.Grid item>
            <Mui.Grid container>
              <RepoDetailsText
                lineHeight={1.3}
                fontSize="12px"
                fontFamily="Segoe UI"
              >
                Build by
              </RepoDetailsText>
              {builtBy.map((user) => (
                <AuthorAvatar
                  key={user.url}
                  src={user.avatar}
                  alt={user.username}
                />
              ))}
            </Mui.Grid>
          </Mui.Grid>
        </RepoDetail>
        <Mui.Grid item marginLeft="auto">
          <Mui.Grid container>
            <Icon spacing={2} src={Star} alt="star" />
            <RepoDetailsText
              lineHeight={1.3}
              fontSize="12px"
              fontFamily="Segoe UI"
            >
              {starsSince} stars today
            </RepoDetailsText>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Container>
  )
);

export default Repository;
