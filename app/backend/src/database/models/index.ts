import User from './User';
import Match from './Match';
import Team from './Team';

//team one to many with Matches
//match association
Match.hasMany(Team, {
  foreignKey: 'id',
});


export { User, Match, Team };
