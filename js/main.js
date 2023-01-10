function display(val)
{
 document.getElementById("textval").value+=val
 }
function evalua()//(2)сменил название функции
{
 let x = document.getElementById("textval").value
 let y = eval(x);
 document.getElementById("textval").value = y;
}
function clearTextValue()
{
 document.getElementById("textval").value = ""
}
//(1)вырезал скрипт с html файла