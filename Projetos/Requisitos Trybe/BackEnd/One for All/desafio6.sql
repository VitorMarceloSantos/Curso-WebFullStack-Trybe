SELECT 
    MIN(planos.valor) AS faturamento_minimo,
	MAX(planos.valor) AS faturamento_maximo,
	ROUND(AVG(planos.valor), 2) AS faturamento_medio,
	ROUND(SUM(planos.valor), 2) AS faturamento_total
FROM
    SpotifyClone.tipos_planos AS planos
        INNER JOIN
    SpotifyClone.users AS users ON planos.id_plano = users.id_plano_user;