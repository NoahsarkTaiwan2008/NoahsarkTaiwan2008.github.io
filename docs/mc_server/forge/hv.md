# 高於1.16.5的版本

適用於`1.17.1` ~ 目前的最新版

## 下載
前往[forge](https://files.minecraftforge.net/net/minecraftforge/forge/)官網下載要安裝的版本。

![Imgur](https://i.imgur.com/vCnNXUj.png)

左側可以選擇版本，右側可以選擇要下載甚麼版本(最新版或推薦版本)。
按下`installer`之後，可能會有5秒的廣告，5秒後可以按右上角的`skip`跳過。

我使用`1.20.4`來示範。

---
將下載的jar檔案點兩下打開，選擇`Install server`，並按下面的三個點蘭指定安裝位置

![Imgur](https://i.imgur.com/O2B7Clq.png)

完成後按下`OK`開始安裝

安裝完成後會跳出這個通知

![Imgur](https://i.imgur.com/kf1gFBg.png)

## 啟動伺服器

在你選擇安裝伺服器的資料夾裡，多出了這些文件:

![Imgur](https://i.imgur.com/cK2KYzi.png)

你不需要完全知道所有檔案和資料夾是用來幹嘛的，你只需要知道:
- **`run.bat`** : 用來啟動伺服器。
- **`user_jvm_args.txt`** : 用來設定伺服器的記憶體大小。

::: tip
如果你的作業系統不是**Linux**或**macOS**，可以將`run.sh`刪除。
:::

如果不想要讓伺服器開啟圖形化介面占用資源，可以編輯`run.bat`，在

`java @libraries/net/minecraftforge/forge/1.20.4-49.0.49/win_args.txt %*` 的尾部加入`nogui`。
例如:
```bat
@echo off

java -jar forge-1.20.4-49.0.49-shim.jar --onlyCheckJava
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo If you're struggling to fix the error above, ask for help on the forums or Discord mentioned in the readme.
    goto :exit
)

java @libraries/net/minecraftforge/forge/1.20.4-49.0.49/win_args.txt %* nogui

:exit
pause

```

對`run.bat`點兩下，啟動伺服器。
如果成功的話，會在記錄檔的最後一行跳出

**`You need to agree to the EULA in order to run the server. Go to eula.txt for more info.`**

打開資料夾內的`eula.txt`
將`eula=false`的`false`改成`true`，然後再啟動一次伺服器(再次開啟run.bat)。

當記錄檔跳出`Done (37.431s)! For help, type "help"`時，代表伺服器已經成功開啟。

::: warning
在遊玩伺服器的期間，不要把cmd關閉，一旦cmd被關閉，伺服器就會關閉。
:::

## 修改伺服器記憶體

打開`user_jvm_args.txt`

在最後一行，把`#`拿掉，從`# -Xmx4G`變成`-Xmx4G`。

你可以使用**M (代表MB)**和**G (代表GB)**兩個單位來設定記憶體大小

`-Xmx`是用來設定**可使用的最大**記憶體大小

`-Xms`是用來設定**應使用的最小**記憶體大小

但其實只要設定`Xmx`的量就可以了

::: warning
修改完成後記得儲存。
:::

## 停止伺服器

打開伺服器的cmd，輸入`stop`，等待一段時間，伺服器就成功關閉了。