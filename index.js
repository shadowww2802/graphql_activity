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
            return db.players.filter((player) => player.id === parent.id)
        }
    },
    Player: {
        team(parent) {
            return db.teams.find((team) => team.id === parent.id)
        }
    }
    // Game: {
    //     reviews(parent) {
    //         return db.reviews.filter((r) => r.game_id === parent.id);
    //     },
    // },
    // Author: {
    //     reviews(parent) {
    //         return db.reviews.filter((r) => r.author_id === parent.id);
    //     },
    // },
    // Review: {
    //     author(parent) {
    //         return db.authors.find((a) => a.id === parent.author_id);
    //     },
    //     game(parent) {
    //         return db.games.find((g) => g.id === parent.game_id);
    //     },
    // },
    // Mutation: {
    //     deleteGame(_, args) {
    //         db.games = db.games.filter((g) => g.id !== args.id);
    //         return db.games;
    //     },
    //     addGame(_, args) {
    //         let game = {
    //             ...args.game,
    //             id: Math.floor(Math.random() * 10000).toString(),
    //         };
    //         db.games.push(game);
    //         return game;
    //     },
    //     updateGame(_, args) {
    //         db.games = db.games.map((g) => {
    //             if (g.id === args.id) {
    //                 return { ...g, ...args.edits };
    //             }
    //             return g;
    //         });
    //         return db.games.find((g) => g.id === args.id);
    //     },
    // },
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
