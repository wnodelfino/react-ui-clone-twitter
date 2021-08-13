import React from 'react';

import {
  Container,
  Retweeted,
  TheBestAcaiIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TheBestAcaiIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>TheBestAçai</strong>
            <span>@thebestaçai</span>
            <Dot />
            <time>12 de ago</time>
          </Header>

          <Description>O melhor açai</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              999
            </Status>
            <Status>
              <RetweetIcon />
              999
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
