import User from './User';
import Match from './Match';
import Team from './Team';

Match.belongsTo(Team, { as: 'teamHome', foreignKey: 'homeTeam' })
Match.belongsTo(Team, { as: 'teamAway', foreignKey: 'awayTeam' })

export { User, Match, Team };
