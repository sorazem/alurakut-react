import React from 'react';
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import friends from "../src/content/followers.js"

function ProfileSidebar(prop) {
  return (
      <Box as="aside">
        <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr/>
        <p>
          <a className="boxLink" href={`/user/${prop.githubUser}`}>
            @{prop.githubUser}
          </a>
        </p>
        <hr/>

        <AlurakutProfileSidebarMenuDefault/>
      </Box>
  )
}

export default function Home() {

  const githubUser = "sorazem";
  const name = "Stephanie"
  const [communities, setCommunities] = React.useState([
    {
      id: 3,
      title: "jvscholz",
      url: "https://discord.gg/jvscholz",
      image: "https://yt3.ggpht.com/ytc/AKedOLQ_LemqNbPHKu9XYbFQVhz0PsNECCY4UOiE_IOhCQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 4,
      title: "Perapera - Curso de Japonês",
      url: "https://www.instagram.com/peraperacursodejapones/",
      image: "https://peraperacursodejapones.com.br/l/images/Hotmart-600-600-300x300.png"
    },
    {
      id: 5,
      title: "Pinguins da Neath",
      url: "https://discord.gg/RYSP7C7",
      image: "https://www.seekpng.com/png/detail/172-1722636_kawaii-penguin-love-heart-cute-penguin-drawing.png"
    },
    {
      id: 6,
      title: "Genshin Impact",
      url: "https://genshin.mihoyo.com/pt/",
      image: "https://uploadstatic-sea.mihoyo.com/contentweb/20210622/2021062223051355260.jpg"
    }
  ]);

  return (
    <>
    <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {name}
            </h1>

            <OrkutNostalgicIconSet recados={25} fotos={5} videos={2} fas={7} confiavel={3} legal={2} sexy={1}/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCommunityCreation(e){
              e.preventDefault();
              const communityData = new FormData(e.target)

              const newCommunity = {
                id: new Date().toISOString(),
                title: communityData.get('title'),
                url: communityData.get('url'),
                image: communityData.get('image')
              }
              setCommunities([...communities, newCommunity])
            }}>
              <input
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />

              <input
                placeholder="Qual é o link para a comunidade?"
                name="url"
                aria-label="Qual é o link para a comunidade?"
              />

              <input
                placeholder="Coloque uma URL para usarmos de capa"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
              />

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({friends.length})
            </h2>

            <ul style={{marginBottom: "16px"}}>
              {friends.map((friend) => {
                return (
                  <li key={friend.login}>
                    <a href={`/users/${friend.login}`}>
                      <img src={`https://github.com/${friend.login}.png`} />
                      <span>{friend.login}</span>
                    </a>
                  </li>
                )
              }).splice(0, 6)}
            </ul>

            <a style={{fontWeight: "bold", fontSize: "14px", marginTop: "16px", color: "#b05c59"}}>Ver todos</a>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>

            <ul style={{marginBottom: "16px"}}>
              {communities.map((community) => {
                return (
                  <li key={community.id}>
                    <a href={community.url}>
                      <img src={community.image} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              }).splice(0, 6)}
            </ul>
            <a style={{fontWeight: "bold", fontSize: "14px", marginTop: "16px", color: "#b05c59"}}>Ver todos</a>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
