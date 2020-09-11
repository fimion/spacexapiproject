

const SPACEX_API = 'https://api.spacexdata.com/v3/'

function internalFetch(endpoint){
  const request = new new XMLHttpRequest();
  request.open('GET',SPACEX_API+endpoint);
  request.responseType = "json";
  request.send();

  return new Promise((res,rej)=>{
    request.onload = ()=>{
      res(request.response);
    }
    request.onerror = rej;
  })
}

export function roadsterFetch() {
  return internalFetch("roadster");
};

export function rocketsFetch() {
  return internalFetch("rockets");
  // let rocketsRequest = new XMLHttpRequest();

  // rocketsRequest.open("GET", rocketUrl);
  // rocketsRequest.responseType = "json";
  // rocketsRequest.send();

  // rocketsRequest.onload = function () {
  //   const rocketsResponse = rocketsRequest.response;
  //   console.log(rocketsResponse);

  //   for (var i = 0; i < rocketsResponse.length; i++) {
  //     // console.log(JSON.stringify(rocketsResponse[i].active));
  //   }
  // };
};

export function missionsFetch() {
  return internalFetch("missions");
  // let missionsUrl = "https://api.spacexdata.com/v3/missions";
  // let missionsRequest = new XMLHttpRequest();

  // missionsRequest.open("GET", missionsUrl);
  // missionsRequest.responseType = "json";
  // missionsRequest.send();

  // missionsRequest.onload = function () {
  //   const missionsResponse = missionsRequest.response;
  //   console.log(missionsResponse);

  //   for (var i = 0; i < missionsResponse.length; i++) {
  //     // console.log(JSON.stringify(missionsResponse[i]));
  //   }
  // };
};
