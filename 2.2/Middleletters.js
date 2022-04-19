function getMiddle(s)
{
  //Code goes here!
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
