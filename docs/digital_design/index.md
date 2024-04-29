# 數位邏輯設計筆記

---

> 圖片及部分內容取自[geeksforgeeks](https://www.geeksforgeeks.org/logic-gates/?ref=lbp)

## 邏輯閘

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

---

## OR gate (或閘)

![Imgur](https://i.imgur.com/cDoapdy.png)

或閘會把輸入的值相加

例如有輸入$A$跟輸入$B$，那輸出就會是$A+B$

|**輸入**||**輸出**|
|-|-|-|
|$A$|$B$|$F$|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

## NOT gate (反閘)

![Imgur](https://i.imgur.com/sYdu2Sg.png)

反閘會把輸入的值反過來

例如有輸入$A$，那輸出就會是$\bar{A}$

|輸入|輸出|
|-|-|
|$A$|$\bar{A}$|
|0|1|
|1|0|