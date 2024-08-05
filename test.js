require("dotenv/config");

function test(secret) {

    const secretMatches = process.env.MEANING_OF_LIFE === secret;
    console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
    console.log(`The secret does ${secretMatches ? "" : "not "}match the meaning of life`);
    return secretMatches;

};

test("42");