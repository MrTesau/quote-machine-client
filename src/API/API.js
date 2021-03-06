const API_URL = "https://goofy-bohr-1f3a71.netlify.app/.netlify/functions/api";
//"http://localhost:9000/.netlify/functions/api";
//window.location.hostname === "localhost"
// ? "http://localhost:1337"
//: "future server"; // INSERT SERVER URL

// request quotes
export async function listQuotes() {
  const response = await fetch(API_URL); //api/logs`);
  //console.log(response.json());
  return response.json();
}
// post new entry
export async function createQuote(entry) {
  const response = await fetch(API_URL, {
    //await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(entry),
  });

  let json;
  if (response.headers.get("content-type").includes("text/html")) {
    const message = await response.text();
    json = {
      message,
    };
  } else {
    json = await response.json();
  }

  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}
// delete attempt
export async function deleteQuote(id) {
  //const response = await fetch(`${API_URL}/api/logs`, {
  const response = await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      id: `${id}`,
    },
  });

  let json;
  if (response.headers.get("content-type").includes("text/html")) {
    const message = await response.text();
    json = {
      message,
    };
  } else {
    json = await response.json();
  }

  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}
