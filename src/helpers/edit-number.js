function editNumber(string) {
  return (
    string.slice(0, 3) + '-' + string.slice(3, 5) + '-' + string.slice(5, 7)
  );
}

export default editNumber;
