import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Import Valorant dataset
import db from './DATABASE/database.js';

// Import the GraphQL schema
import { typeDefs } from './SCHEMA/schema.js';

// Define resolvers
const resolvers = {
    Query: {
        teams() {
            return db.teams
        },
        team(_, args) {
            return db.teams.find((team) => team.id === args.id)
        },
        players() {
            return db.players
        },
        player(_, args) {
            return db.players.find((player) => player.id === args.id)
        },
        agents() {
            return db.agents
        },
        agent(_, args) {
            return db.agents.find((agent) => agent.id === args.id)
        },
        maps() {
            return db.maps
        },
        map(_, args) {
            return db.maps.find((map) => map.id === args.id)
        },
    },
    Team: {
        players(parent) {
            return db.players.filter((team) => team.team_id === parent.id)
        }
    },
    Player: {
        team(parent) {
            return db.teams.find((player) => player.id === parent.team_id)
        },
        agent(parent) {
            return db.agents.find((player) => player.id === parent.agent_id)
        }
    },
    Agent: {
        players(parent) {
            return db.agents.filter((agent) => agent.agent_id === parent.id)
        }
    },

    Mutation: {
        //TEAM
        deleteTeam(_, args) {
            db.teams = db.teams.filter((team) => team.id !== args.id);
            return db.teams;
        },
        addTeam(_, args) {
            let team = {
                ...args.team,
                id: Math.floor(Math.random() * 10000).toString(),
            };
            db.teams.push(team);
            return team;
        },
        updateTeam(_, args) {
            db.teams = db.teams.map((team) => {
                if (team.id === args.id) {
                    return { ...team, ...args.edits };
                }
                return team;
            });
            return db.teams.find((team) => team.id === args.id);
              
            //   "edits": {
            //     "team_name": "Jifri",
            //     "region": "Test",
            //     "signature_maps": ["Test"]
            //  },
            //  "id": "1"
            // }
        },

        //MAP
        deleteMap(_, args) {
            db.maps = db.maps.filter((map) => map.id !== args.id);
            return db.maps;
        },
        addMap(_, args) {
            let map = {
                ...args.map,
                id: Math.floor(Math.random() * 10000).toString(),
            };
            db.maps.push(map);
            return map;
        },
        updateMap(_, args) {
            db.maps = db.maps.map((map) => {
                if (map.id === args.id) {
                    return { ...map, ...args.edits };
                }
                return map;
            });
            return db.maps.find((map) => map.id === args.id);
        },

        //AGENT
        deleteAgent(_, args) {
            db.agents = db.agents.filter((agent) => agent.id !== args.id);
            return db.agents;
        },
        addAgent(_, args) {
            let agent = {
                ...args.agent,
                id: Math.floor(Math.random() * 10000).toString(),
            };
            db.agents.push(agent);
            return agent;
        },
        updateAgent(_, args) {
            db.agents = db.agents.map((agent) => {
                if (agent.id === args.id) {
                    return { ...agent, ...args.edits };
                }
                return agent;
            });
            return db.agents.find((agent) => agent.id === args.id);
        },

    },
};

// Create an ApolloServer instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
    listen: { port: 6969 },
});

console.log('Server ready at port', 6969);
