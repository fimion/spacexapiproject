export function roadsterFetch() {
  let roadsterUrl = "https://api.spacexdata.com/v3/roadster";
  let roadsterRequest = new XMLHttpRequest();

  roadsterRequest.open("GET", roadsterUrl);
  roadsterRequest.responseType = "json";
  roadsterRequest.send();

  roadsterRequest.onload = function () {
    const roadsterResponse = roadsterRequest.response;
    console.log(roadsterResponse);
  };
};

export function rocketsFetch() {
  let rocketUrl = "https://api.spacexdata.com/v3/rockets";
  let rocketsRequest = new XMLHttpRequest();

  rocketsRequest.open("GET", rocketUrl);
  rocketsRequest.responseType = "json";
  rocketsRequest.send();

  rocketsRequest.onload = function () {
    const rocketsResponse = rocketsRequest.response;
    console.log(rocketsResponse);

    for (var i = 0; i < rocketsResponse.length; i++) {
      // console.log(JSON.stringify(rocketsResponse[i].active));
    }
  };
};

export function missionsFetch() {
  let missionsUrl = "https://api.spacexdata.com/v3/missions";
  let missionsRequest = new XMLHttpRequest();

  missionsRequest.open("GET", missionsUrl);
  missionsRequest.responseType = "json";
  missionsRequest.send();

  missionsRequest.onload = function () {
    const missionsResponse = missionsRequest.response;
    console.log(missionsResponse);

    for (var i = 0; i < missionsResponse.length; i++) {
      // console.log(JSON.stringify(missionsResponse[i]));
    }
  };
};
