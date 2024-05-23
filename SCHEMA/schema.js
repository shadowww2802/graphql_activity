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
        team: String!,
        main_agent: String!
    }
    
    type Agent {
        id: ID!,
        agent_name: String!,
        role: String!
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
    
    # type Mutation {
    #     addGame(game: AddGameInput!): Game,
    #     deleteGame(id: ID!): [Game],
    #     updateGame(id: ID!, edits: EditGameInput!): Game
    # }
    
    # input AddGameInput {
    #     title: String!,
    #     platform: [String!]!
    # }
    
    # input EditGameInput {
    #     title: String,
    #     platform: [String!]
    # }
`
