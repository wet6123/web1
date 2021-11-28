const url =
  "https://github.com/owid/covid-19-data/blob/master/public/data/latest/owid-covid-latest.json";

function request() {
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
request();
