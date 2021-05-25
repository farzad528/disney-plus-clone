const fetch = require("node-fetch");

exports.handler = async function () {
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT;
  const token = process.env.ASTRA_DB_APPLICATION_TOKEN;
  const query = `
  query {
    movies_by_genre(
      value: { genre:"Sci-Fi"},
      orderBy: [year_DESC]) {
        values {
          year,
          title,
          duration,
          synopsis,
          thumbnail
        }
      }
    
  }
  `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": token,
    },
    body: JSON.stringify({ query }),
  });

  try {
    const responseBody = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
