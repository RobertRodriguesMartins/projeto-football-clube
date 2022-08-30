const findHomeLeaderBoard = `SELECT 
d.name,
  d.totalGames,
CONVERT(d.gf, unsigned) AS goalsFavor,
CONVERT(d.go, unsigned) AS goalsOwn,
  CONVERT(d.tl, unsigned) AS totalLosses,
  CONVERT(d.tv, unsigned) AS totalVictories,
  CONVERT(d.td, unsigned) AS totalDraws,
  CONVERT(d.gb, signed) AS goalsBalance,
  CONVERT(d.tp, unsigned) AS totalPoints,
ROUND(sum(d.tp /(d.totalGames*3) * 100), 2) AS efficiency
FROM 
(SELECT
  t.team_name AS name,
  sum(m.away_team_goals) AS go,
  sum(m.home_team_goals) AS gf,
  sum(m.home_team_goals < m.away_team_goals) * 1 AS tl,
  sum(m.home_team_goals > m.away_team_goals) * 1 AS tv,
  sum(m.home_team_goals = m.away_team_goals) * 1 AS td,
  count(t.team_name) AS totalGames,
  sum(m.home_team_goals > m.away_team_goals) * 3 +
  sum(m.home_team_goals = m.away_team_goals) * 1 AS tp,
  sum(m.home_team_goals - m.away_team_goals) AS gb
FROM TRYBE_FUTEBOL_CLUBE.matches AS m
  INNER JOIN teams AS t
  ON m.home_team = t.id
WHERE m.in_progress = 0
GROUP BY t.team_name
  ) AS d
GROUP BY d.name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, go ASC;`;

export default findHomeLeaderBoard;
