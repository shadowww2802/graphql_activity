let teams = [
    { id: '1', team_name: 'Paper Rex', region: 'Pacific', signature_maps: ['Sunset', 'Bind'], players: ['f0rsakeN', 'Jinggg', 'something'] },
    { id: '2', team_name: 'Leviatan', region: 'Americas', signature_maps: ['Icebox', 'Lotus'], players: ['aspas', 'Mazino', 'C0M'] },
    { id: '3', team_name: 'Edward Gaming', region: 'China', signature_maps: ['Breeze', 'Sunset'], players: ['ZmjjKK', 'CHICHOO', 'nobody'] },
]

let players = [
    { id: '1', player_name: 'f0rsakeN', team: 'Paper Rex', main_agent: 'Breach' },
    { id: '2', player_name: 'Jinggg', team: 'Paper Rex', main_agent: 'Raze' },
    { id: '3', player_name: 'something', team: 'Paper Rex', main_agent: 'Jett' },
    { id: '4', player_name: 'aspas', team: 'Leviatan', main_agent: 'Jett' },
    { id: '5', player_name: 'C0M', team: 'Leviatan', main_agent: 'Sova' },
    { id: '6', player_name: 'Mazino', team: 'Leviatan', main_agent: 'Omen' },
    { id: '7', player_name: 'ZmjjKK', team: 'Edward Gaming', main_agent: 'Jett' },
    { id: '8', player_name: 'CHICHOO', team: 'Edward Gaming', main_agent: 'Viper' },
    { id: '9', player_name: 'nobody', team: 'Edward Gaming', main_agent: 'Sova' },
]

let agents = [
    { id: '1', agent_name: 'Jett', role: 'Duelist' },
    { id: '2', agent_name: 'Breach', role: 'Iniator' },
    { id: '3', agent_name: 'Viper', role: 'Controller' },
    { id: '4', agent_name: 'Omen', role: 'Controller' },
    { id: '5', agent_name: 'Raze', role: 'Duelist' },
    { id: '6', agent_name: 'Sova', role: 'Iniator' },
]

let maps = [
    { id: '1', map_name: 'Bind', location: 'Morocco' },
    { id: '2', map_name: 'Breeze', location: 'Atlantic Ocean' },
    { id: '3', map_name: 'Lotus', location: 'India' },
    { id: '4', map_name: 'Icebox', location: 'Russia' },
    { id: '5', map_name: 'Sunset', location: 'USA' },
]

export default { teams, players, agents, maps }