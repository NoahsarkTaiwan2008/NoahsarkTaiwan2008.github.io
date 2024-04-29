# 數位邏輯設計筆記

## 邏輯閘

## NOT gate
![image](https://hackmd.io/_uploads/Syj2HzelR.png)

### 一個輸入，一個輸出，輸出的結果為輸入值的反向

1 -> 0

0 -> 1

| Input | Output |
| -------- | -------- |
| 0  | 1    |
| 1| 0|

---

## AND gate
![image](https://hackmd.io/_uploads/S1UCrGxlR.png)

### 兩個輸入，一個輸出，輸出的結果為A * B

| A | B | A * B |
|---|---| ---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

## NAND gate
![image](https://hackmd.io/_uploads/BySe8zll0.png)
### 跟 AND gate 幾乎一樣，兩個輸入，一個輸出，但輸出的結果會跟 AND gate剛好相反

| A | B | (A + B)' |
|---|---| ---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

如果將兩個輸入結合起來
![image](https://hackmd.io/_uploads/Bk_q8fgxA.png)
他會變成這樣
![image](https://hackmd.io/_uploads/HJHRLfgeA.png)

輸出會是a的補數

真值表
| A |A| (AA)' |
| --- |---| --- |
| 0 | 0 |1|
|1|1|0|

---

# OR gate
![image](https://hackmd.io/_uploads/r1-fUfggR.png)
### 兩個輸入，一個輸出，輸出的結果為A + B

| A | B | A + B |
|---|---| ---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

## NOR gate

![image](https://hackmd.io/_uploads/HkFnKfeeC.png)

### 跟 OR gate幾乎一樣，但輸出的結果會跟 OR gate剛好相反

| A | B | (A + B)' |
|---|---| ---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

---

### 當看見`AND gate`時，可以把它看成 `+`，' 當看見`OR gate`時，可以把它看成`×`

![image](https://hackmd.io/_uploads/BJnLCfelR.png)

這個圖的函式為
> ### f = x'(xy+z)+w+xy'z

---

# 卡諾圖

|A|B|C|F|
|-|-|-|-|
|0|0|0|0|
|0|0|1|0|
|0|1|0|1|
|0|1|0|1|
|1|0|0|1|
|1|0|1|1|
|1|1|0|1|
|1|1|1|0|