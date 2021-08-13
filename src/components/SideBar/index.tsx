import React from 'react';
import Stickybox from 'react-sticky-box';

import List from '../List/index';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SerachWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SerachWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SerachWrapper>

      <Stickybox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Wellynton Delfino"
                nickname="@wellyntondelfino"
              />,
              <FollowSuggestion
                name="Wellynton Delfino"
                nickname="@wellyntondelfino"
              />,
              <FollowSuggestion
                name="Wellynton Delfino"
                nickname="@wellyntondelfino"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </Stickybox>
    </Container>
  );
};

export default SideBar;
