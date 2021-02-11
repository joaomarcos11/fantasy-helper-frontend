import React from 'react';
import { Header, Label, Input, Divider, Segment, Grid } from 'semantic-ui-react'

import { PageContainer } from './styles';

export default function MyMatchup() {
  const [homeGames, setHomeGames] = React.useState(0);
  const [homeFG, setHomeFG] = React.useState(0);
  const [homeFT, setHomeFT] = React.useState(0);
  const [home3pts, setHome3pts] = React.useState(0);
  const [homePts, setHomePts] = React.useState(0);
  const [homeAst, setHomeAst] = React.useState(0);
  const [homeReb, setHomeReb] = React.useState(0);
  const [homeStl, setHomeStl] = React.useState(0);
  const [homeBlk, setHomeBlk] = React.useState(0);
  const [homeTo, setHomeTo] = React.useState(0);

  const [awayGames, setAwayGames] = React.useState(0);
  const [awayFG, setAwayFG] = React.useState(0);
  const [awayFT, setAwayFT] = React.useState(0);
  const [away3pts, setAway3pts] = React.useState(0);
  const [awayPts, setAwayPts] = React.useState(0);
  const [awayAst, setAwayAst] = React.useState(0);
  const [awayReb, setAwayReb] = React.useState(0);
  const [awayStl, setAwayStl] = React.useState(0);
  const [awayBlk, setAwayBlk] = React.useState(0);
  const [awayTo, setAwayTo] = React.useState(0);

  const allStats = [
    {key:'gms', homeKey:'h-gms', awayKey:'a-gms', name:'Games Left', homeValue: homeGames, setHomeValue: setHomeGames, awayValue: awayGames, setAwayValue: setAwayGames},
    {key:'fg', homeKey:'h-fg', awayKey:'a-gms', name:'Field Goal %', homeValue: homeFG, setHomeValue: setHomeFG, awayValue: awayFG, setAwayValue: setAwayFG},
    {key:'ft', homeKey:'h-ft', awayKey:'a-gms', name:'Free Throw %', homeValue: homeFT, setHomeValue: setHomeFT, awayValue: awayFT, setAwayValue: setAwayFT},
    {key:'3pts', homeKey:'h-3pts', awayKey:'a-gms', name:'3Pts Made', homeValue: home3pts, setHomeValue: setHome3pts, awayValue: away3pts, setAwayValue: setAway3pts},
    {key:'pts', homeKey:'h-pts', awayKey:'a-gms', name:'Points', homeValue: homePts, setHomeValue: setHomePts, awayValue: awayPts, setAwayValue: setAwayPts},
    {key:'reb', homeKey:'h-reb', awayKey:'a-gms', name:'Rebounds', homeValue: homeReb, setHomeValue: setHomeReb, awayValue: awayReb, setAwayValue: setAwayReb},
    {key:'ast', homeKey:'h-ast', awayKey:'a-gms', name:'Assists', homeValue: homeAst, setHomeValue: setHomeAst, awayValue: awayAst, setAwayValue: setAwayAst},
    {key:'stl', homeKey:'h-stl', awayKey:'a-gms', name:'Steals', homeValue: homeStl, setHomeValue: setHomeStl, awayValue: awayStl, setAwayValue: setAwayStl},
    {key:'blk', homeKey:'h-blk', awayKey:'a-gms', name:'Blocks', homeValue: homeBlk, setHomeValue: setHomeBlk, awayValue: awayBlk, setAwayValue: setAwayBlk},
    {key:'to', homeKey:'h-to', awayKey:'a-gms', name:'Turnovers', homeValue: homeTo, setHomeValue: setHomeTo, awayValue: awayTo, setAwayValue: setAwayTo}
  ];

  return (
    <PageContainer>
      <Header as='h1'>MyMatchup</Header>
      <p>Compare os seus stats do momento com os de seus adversários!</p>

      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Header as='h2' textAlign='center'>Home Team</Header>
            <div className='stats-home'>
              {allStats.map(({ key, homeKey, name, homeValue, setHomeValue, awayValue }) => (
                <div key={homeKey}>
                  <Label 
                    className='stat-label' 
                    size='massive'
                    key={`${homeKey}-label1`}
                  >
                    {name}
                  </Label>

                  <Input
                    className='stat-input'
                    size='huge'
                    key={`${homeKey}-input`}
                    value={homeValue}
                    onChange={({ target }) => setHomeValue(target.value)}
                  />
          
                  <Label
                    className='stat-result-home' 
                    color={homeValue >= awayValue ? (homeValue > awayValue ? 'green' : 'yellow') : 'red'}
                    size='massive'
                    key={`${homeKey}-label2`}
                  >
                    {homeValue - awayValue}
                  </Label>
                </div>
              ))}
            </div> 
          </Grid.Column>

          <Grid.Column>
          <Header as='h2' textAlign='center'>Away Team</Header>
          <div className='stats-home'>
              {allStats.map(({ key, awayKey, name, awayValue, setAwayValue, homeValue }) => (
                <div key={awayKey}>
                  <Label
                    className='stat-result-away' 
                    color={awayValue >= homeValue ? (awayValue > homeValue ? 'green' : 'yellow') : 'red'} 
                    size='massive'
                    key={`${awayKey}-label2`}
                  >
                    {awayValue - homeValue}
                  </Label>

                  <Input
                    className='stat-input'
                    size='huge'
                    key={`${awayKey}-input`}
                    value={awayValue}
                    onChange={({ target }) => setAwayValue(target.value)}
                  />

                  <Label 
                    className='stat-label' 
                    size='massive'
                    key={`${awayKey}-label1`}
                  >
                    {name}
                  </Label>
                </div>
              ))}
            </div> 
          </Grid.Column>
        </Grid>
        <Divider vertical>VS</Divider>
      </Segment>
    </PageContainer>
  );
}