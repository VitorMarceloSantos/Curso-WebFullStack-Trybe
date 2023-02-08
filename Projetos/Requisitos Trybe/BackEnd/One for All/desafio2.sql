SELECT
    COUNT(DISTINCT musicas.nome_musica) AS cancoes,
    COUNT(DISTINCT artistas.nome_artista) AS artistas,
    COUNT(DISTINCT albuns.nome_album) AS albuns
FROM
    SpotifyClone.musicas,
    SpotifyClone.artistas,
    SpotifyClone.albuns;