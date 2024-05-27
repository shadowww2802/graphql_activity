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

        addMap(map: AddMapInput!): Map,
        deleteMap(id: ID!): [Map],
        updateMap(id: ID!, edits: EditMapInput!): Map

        addAgent(agent: AddAgentInput!): Agent,
        deleteAgent(id: ID!): [Agent],
        updateAgent(id: ID!, edits: EditAgentInput!): Agent
    }
    
    ###Team
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


    ###Map
    input AddMapInput {
        map_name: String!,
        location: String!
    }
    
    input EditMapInput {
        id: ID!
        map_name: String!,
        location: String!
    }


    ###Agent
    input AddAgentInput {
        agent_name: String!,
        role: String!
    }
    
    input EditAgentInput {
        id: ID!
        agent_name: String!,
        role: String!
    }
`
