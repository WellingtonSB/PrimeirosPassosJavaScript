AlinhamentoEncadeamentoIF


<!DOCTYPE html> 
<html>
<head>
<title>js04_Salario1.htm - aninhamento de if</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8"/>
</head>
<body>
<script language="Javascript">
<!--
/* Objetivo: Calcular o salário líquido de um funcionário que trabalha por hora (horista).
- Para desenvolver o cálculo é necessário ter as seguintes informações:
- Quantidade de horas trabalhadas no mês (js_qht)
- Valor da hora de trabalho (js_vht)
- Percentual de desconto do INSS (js_inss)
- Informar a classificação Salarial
- Objetos/Métodos utilizados:
entrada: window.prompt
saída: document.write
*/
/* Definicao das variaveis */
var js_qht; // var de entrada - Quantidade de Horas Trabalhadas
var js_vht; // var de entrada - Valor da Hora Trabalhada
var js_inss; // var de entrada - Percentual de Desconto INSS
var js_tdes; // var de saida - Total de Descontos
var js_sb; // var de saida - Valor do Salario Bruto
var js_sl; // var de saida - Valor do Salario Liquido
/* Entrada de Dados */
js_qht = parseFloat(window.prompt('Informe a Quantidade de Horas Trabalhadas/Mês: (135 a 180)','00'));
js_vht = parseFloat(window.prompt('Informe o Valor da Hora Trabalhada: (25 a 50)','00'));
js_inss = parseFloat(window.prompt ('Informe o Percentual de Desconto INSS: (5 a 15)','00'));
/* Processamento de Dados */
js_sb = js_vht * js_qht;
js_tdes = (js_inss/100) * js_sb;
js_sl = js_sb - js_tdes; 
/* Saída de Dados com Consistencia de Valores */
document.write('<p><b>DEMONSTRATIVO PARA CÁLCULO DO SALÁRIO LÍQUIDO</b>');
document.write('<p>Quantidade de Horas Trabalhadas (135 a 180) => <b>' + js_qht + '</b>');
if (js_qht > 180){
document.write(' ... (<b>Valor Máximo Excedido!</b>)');
}
if (js_qht < 135){
document.write(' ... (<b>Valor Mínimo Inválido!</b>)');
}
document.write('<p>Valor da Hora Trabalhada (25 a 50) => <b>' + js_vht + '</b>');
if (js_vht > 50){
document.write(' ... (<b>Valor Máximo Excedido!</b>)');
}
if (js_vht < 25){
document.write(' ... (<b>Valor Mínimo Inválido!</b>)');
}
document.write('<p>Percentual de Desconto INSS (5 a 15) => <b>' + js_inss + '</b>');
if (js_inss > 15){
document.write(' ... (<b>Valor Máximo Excedido!</b>)');
}
if (js_inss < 5){
document.write(' ... (<b>Valor Mínimo Inválido!</b>)');
}
document.write('<p>===========================================================');
document.write('<p><b>Salario BRUTO = </b>'+js_sb);
document.write('<p>Total de Desconto INSS = '+js_tdes);
document.write('<p><p><b>Salario LÍQUIDO = </b>'+js_sl);
/* Saída de Dados com Aninhamento de if */
if (js_sl > 10500){
document.write(' ... (<b>Salário Elevado! </b>maior que 10.500)');
}
else {
if (js_sl > 6000){
document.write(' ... (<b>Salário Satisfatório! </b>maior que 6.000)');
}
else {
if (js_sl > 3000){
document.write(' ... (<b>Salário Moderado! </b>maior que 3.000)');
}
else {
document.write(' ... (<b>Salário inSatisfatório! </b>menor ou igual a 3.000)');
}
}
}
//-->
</script>
</body>
</html>