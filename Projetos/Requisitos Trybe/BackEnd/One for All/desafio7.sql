SELECT 
    art.nome_artista AS artista,
    alb.nome_album AS album,
    COUNT(seg.id_seguindo_usuario) AS seguidores
FROM
    SpotifyClone.artistas AS art
        INNER JOIN
    SpotifyClone.albuns AS alb ON art.id_artista = alb.id_artista_album
        INNER JOIN
    SpotifyClone.seguindo_artista AS seg ON alb.id_artista_album = seg.id_seguindo_artista
GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;