let teams = [
    { id: '1', team_name: 'Paper Rex', region: 'Pacific', signature_maps: ['Sunset', 'Bind'] },
    { id: '2', team_name: 'Leviatan', region: 'Americas', signature_maps: ['Icebox', 'Lotus'] },
    { id: '3', team_name: 'Edward Gaming', region: 'China', signature_maps: ['Breeze', 'Sunset'] },
]

let players = [
    { id: '1', player_name: 'f0rsakeN', team_id: '1', agent_id: '2' },
    { id: '2', player_name: 'Jinggg', team_id: '1', agent_id: '5' },
    { id: '3', player_name: 'something', team_id: '1', agent_id: '1' },
    { id: '4', player_name: 'aspas', team_id: '2', agent_id: '1' },
    { id: '5', player_name: 'C0M', team_id: '2', agent_id: '6' },
    { id: '6', player_name: 'Mazino', team_id: '2', agent_id: '4' },
    { id: '7', player_name: 'ZmjjKK', team_id: '3', agent_id: '1' },
    { id: '8', player_name: 'CHICHOO', team_id: '3', agent_id: '3' },
    { id: '9', player_name: 'nobody', team_id: '3', agent_id: '6' },
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
