DecisaoCondicionalComposta

<!DOCTYPE html>
<html>
<head>
<title>js04_ifelse.htm - if</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8"/>
</head>
<body>
<script language="Javascript">
<!--
/* Objetivo: Ler dois valores, independentemente da ordem em que foram digitados, e apresentá-los em
ordem crescente.
Com a utilização da decisão condicional composta (if...else), não há mais necessidade de definir uma
terceira variável.
*/
/* Definicao das variaveis */
var js_n1;
var js_n2;
/* Entrada de Dados */
js_n1= parseInt(window.prompt('Informe o valor do primeiro número: ' , '00'));
js_n2= parseInt(window.prompt('Informe o valor do segundo número: ' , '00'));
/* Saída de Dados sem classificacao */
document.write('número 1 digitado = ' + js_n1);
document.write('<br>número 2 digitado = ' + js_n2);
/* Saída de Dados com classificacao por decisao condicional composta (if...else) */
if (js_n1 < js_n2) {
document.write('<p><b>Classificação em Ordem Crescente:</b> ' + js_n1 + ' e ' + js_n2);
}
else {
document.write('<p><b>Classificação em Ordem Crescente:</b> ' + js_n2 + ' e ' + js_n1);
}
//-->
</script>
</body>
</html>