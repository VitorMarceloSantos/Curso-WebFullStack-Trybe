function separateAlbum(albumSaved) {
  let newArray = [];
  const arrayAlbums = [];
  albumSaved.forEach(({ artistName }) => {
    if (newArray.length === 0 && arrayAlbums.length === 0) {
      newArray = albumSaved.filter(({ artistName: name }) => name === artistName);
      arrayAlbums.push(newArray); // adicionando os albuns iguais
      newArray = albumSaved
        .filter(({ artistName: name }) => name !== newArray[0].artistName);
    } else if (newArray.length !== 0 && artistName === newArray[0].artistName) {
      console.log('nome', newArray[0].artistName);
      const arrayNew = newArray
        .filter(({ artistName: name }) => name === newArray[0].artistName);
      arrayAlbums.push(arrayNew); // adicionando os albuns iguais
      newArray = newArray
        .filter(({ artistName: name }) => name !== newArray[0].artistName);
    }
  });
  return arrayAlbums;
}
export default separateAlbum;
