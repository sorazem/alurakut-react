import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import followers from "../src/content/followers.js"

function ProfileSidebar(prop) {
  return (
    <Box>
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = "sorazem";
  const name = "Stephanie"
  const communityPeople = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

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
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({communityPeople.length})
            </h2>

            <ul>
              {communityPeople.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Seguidores ({followers.length})
            </h2>

            <ul style={{marginBottom: "16px"}}>
              {followers.map((follower) => {
                return (
                  <li>
                    <a href={`/users/${follower.login}`} key={follower.login}>
                      <img src={`https://github.com/${follower.login}.png`} />
                      <span>{follower.login}</span>
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
