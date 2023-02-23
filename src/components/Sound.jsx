const Player = ({ url }) => {
  const audio = new Audio(url);
  const play = audio.play();
};

export default Player;