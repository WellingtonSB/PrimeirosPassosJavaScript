Teste
<!DOCTYPE html>
<html>
<head>
<title>js04_if.htm - if</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8"/>
</head>
<body>
<script language="Javascript">
/* Objetivo: Ler dois valores, independentemente da ordem em que foram digitados, e apresentá-los em ordem crescente.
 Será necessário efetuar a troca de valores, por isso, recomendamos definir uma terceira variável.
*/
/* Definicao das variaveis */
var js_n1;
var js_n2;
var js_n3;
/* Entrada de Dados */
js_n1= parseInt(window.prompt('Informe o valor do primeiro número: ' , '00'));
js_n2= parseInt(window.prompt('Informe o valor do segundo número: ' , '00'));
/* Saída de Dados sem classificacao */
document.write('número 1 digitado = ' + js_n1);
document.write('<br>número 2 digitado = ' + js_n2);
/* Saída de Dados com classificacao por decisao condicional simples (if) */
 if (js_n1 > js_n2) {
 js_n3 = js_n1;
 js_n1 = js_n2;
 js_n2 = js_n3;
 }
document.write('<p><b>Classificação em Ordem Crescente:</b> ' + js_n1 + ' e ' + js_n2);
</script>
</body>
</html>