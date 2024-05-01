# 邏輯閘

> 圖片及部分內容取自[geeksforgeeks](https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/?ref=lbp)

## AND gate (及閘)

![Imgur](https://i.imgur.com/MnQtmNY.png)

AND閘會把輸入的值相乘

例如有輸入$A$跟輸入$B$，那輸出就會是$A×B$

| **輸入** || **輸出**  |
|-|-|-|
|$A$|$B$|$F$|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|1|

## NAND gate (反及閘)

![Imgur](https://i.imgur.com/TeqHs5y.jpg)

可以把**NAND閘**想成是**AND閘**的相反值，因為**NAND閘**的輸出就是**AND閘**的輸出返過來而已

算式長這樣
$$F=\overline{A × B}$$

## OR gate (或閘)

![Imgur](https://i.imgur.com/cDoapdy.png)

OR閘會把輸入的值相加

例如有輸入$A$跟輸入$B$，那輸出就會是$A+B$

|**輸入**||**輸出**|
|-|-|-|
|$A$|$B$|$F$|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

## NOR gate (反或閘)

![Imgur](https://i.imgur.com/4uxktQ2.png)

可以把**NOR閘**想成是**OR閘**的相反值，因為**NOR閘**的輸出就是**OR閘**的輸出反過來而已

算式長這樣
$$F=\overline{A+B}$$

|輸入||輸出|
|-|-|-|
|$A$|$B$|$F$|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|0|

## NOT gate (反閘)

![Imgur](https://i.imgur.com/sYdu2Sg.png)

NOT閘會把輸入的值反過來

例如有輸入$A$，那輸出就會是$\bar{A}$

|輸入|輸出|
|-|-|
|$A$|$\bar{A}$|
|0|1|
|1|0|

## XOR gate (互斥或閘)

![Imgur](https://i.imgur.com/gYrFI3m.png)

XOR閘它一次只能接受兩個輸入。沒有像三個或更多輸入的XOR閘。
如果兩個輸入值不相同，輸出就會是1。如果兩個輸入值相同，輸出就會是0。

算式可以是這樣
$$F=A\oplus B$$
也可以是這樣
$$F=A\bar{B}+\bar{A}B$$

|輸入||輸出|
|-|-|-|
|$A$|$B$|$F$|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

## XNOR gate (反互斥或閘)

![Imgur](https://i.imgur.com/9gAqQaS.jpg)

可以把**XNOR閘**想成是**XOR閘**的相反值，因為**XNOR閘**的輸出就是**XOR閘**的輸出反過來而已

算式長這樣
$$F=A⊙B$$
或是
$$F=AB+\overline{AB}$$