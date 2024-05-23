export const typeDefs = `#graphql

    type Team {
        id: ID!,
        team_name: String!,
        region: String!,
        signature_maps: [String!]!,
        players: [Player!]
    }
    
    type Player {
        id: ID!,
        player_name: String!,
        team: Team!,
        agent: Agent!
    }
    
    type Agent {
        id: ID!,
        agent_name: String!,
        role: String!
        players: [Player!]
    }

    type Map {
        id: ID!,
        map_name: String!,
        location: String!,
    }
    
    type Query {
        teams: [Team],
        team (id: ID!): Team,
        players: [Player],
        player (id: ID!): Player,
        agents: [Agent],
        agent (id: ID!): Agent,
        maps: [Map],
        map (id: ID!): Map
    }
    
    type Mutation {
        addTeam(team: AddTeamInput!): Team,
        deleteTeam(id: ID!): [Team],
        updateTeam(id: ID!, edits: EditTeamInput!): Team
    }
    
    input AddTeamInput {
        team_name: String!,
        region: String!,
        signature_maps: [String!]!
    }
    
    input EditTeamInput {
        team_name: String!,
        region: String!,
        signature_maps: [String!]!
    }
`
