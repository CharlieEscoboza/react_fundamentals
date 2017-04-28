/**
 * Created by Charlie on 12/11/2016.
 */

import axios from 'axios';


const internals = {};


internals.getUserInfo = function getUserInfo(userName = ''){
  return axios.get('https://api.github.com/users/' + userName);
};


internals.getRepos = function getRepos(userName = '') {
  return axios.get('https://api.github.com/users/' + userName + '/repos?per_page=100');
};


internals.getTotalStars = function getTotalStars(repos = {data: []}) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count;
  }, 0);
};


internals.getPlayersData = function getPlayersData(players = []) {

  return players.map( async function (player) {
    const repos = await internals.getRepos(player.login);
    const totalStars = await internals.getTotalStars(repos);
    return {
      followers: player.followers,
      totalStars: totalStars
    };
  });
};


internals.calculateScores = function calculateScores(players = []) {
  return players.map((player) => {
    return player.followers * 3 + player.totalStars;
  });
};


async function getPlayersInfo(players = []) {
  try {
    const usersInfo = await Promise.all(players.map(internals.getUserInfo));
    return usersInfo.map((userInfo) => userInfo.data);
  } catch (error) {
    console.warn('Error getting github users info', error);
  }
}


async function getBattleResults(playersData) {
  try {
    const players = await Promise.all(internals.getPlayersData(playersData));
    return await internals.calculateScores(players);
  } catch (error) {
    console.warn('Error Calculating scores', error.message);
  }
}

export {getPlayersInfo, getBattleResults}