import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Wellynton Delfino</h1>
        <h2>@wellynton_delfino</h2>

        <p>
          Developer at <a href="www.sistemathebestacai.com">@TheBestAçai</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Lagoa da Prata, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 23 de setembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>999</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </Followage>

        <Feed />
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
