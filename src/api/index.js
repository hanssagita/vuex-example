import axios from 'axios';

const getPeople = (success, fail) => {
  axios
    .get('https://swapi.dev/api/people/')
    .then((response) => success(response))
    .catch((response) => fail(response));
};

const getPlanets = (success, fail) => {
  axios
    .get('https://swapi.dev/api/planets/')
    .then((response) => success(response))
    .catch((response) => fail(response));
};

export { getPeople, getPlanets };
