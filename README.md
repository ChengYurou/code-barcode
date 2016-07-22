# 项目分为两部分
## 1.由邮编转化为条形码(code-barcode)
### 单元测试(unit test)：
#### + tasking1:validateCode
**scheduled time:**20min<br>
**use time:**28min<br>
**reason:在没有想清楚之前着手写代码，导致前10分钟思维混乱，应该想清楚再行动**
###### legalInput test:
**input:**<br> code:String<br>
**output:**<br>formatCode:String<br>
**例如：'45056-1234' ==> '450561234'**
###### illegalInput test:
**input:**<br>code:String<br>
**output:**<br>"illegalCode":String<br>
**例如 '442a'==> 'illegalCode'**

#### + tasking2:addCheckBit
**scheduled time:**20min<br>
**use time:**15min<br>
**reason:哦好吧我也不知道为神码**<br>
**input:**String<br>
**output:**String<br>
**例如 '12345'==>'123455' **

#### + tasking3:covertBarcodes
**scheduled time:10min**<br>
**use time:27min**<br>
**reason:血与泪de教训啊，一开始把digis定义为对象，结果发现获取对象的属性然后返回属性名对应的值这一操作真的很烦，然后更改digits的数据结构**<br><br>
**input:**<br>barcode:String;digits:Array<br>
**output:**<br>barcodes:String<br>
**例如 '34'==>'|::||::|::||' **

### 集成测试(integration test)：
#### + tasking:convertCodeToBarcode
**scheduled time:**10min<br>
**use time:**10min<br>
**reason:毕竟估算了这么多次就是老司机了，无误差哈哈**<br><br>
**input:**<br>code:String<br>
**output:**<br>result:String<br>
**例如'12345' ==> '|:::||::|:|::||::|::|:|:|::|:|:|'**

## 2.由条形码转化为邮编(barcode-code)
### 单元测试(unit test)：

#### + tasking1:validateBarcode
###### legalInput test:
**input:**String<br>
**output:**String<br>
**例如 '|:::||::|:|::||::|::|:|:|::|:|:|'==>'|:::||::|:|::||::|::|:|:|::|:|:|' **
###### illegalInput test:
**input:**Stiing<br>
**output:**String<br>
**例如'|:::||::|:|::||' ==> 'illeageBarcode'**
#### + tasking2:covertBarcodeArray
**input:**String<br
**output:**Array<br>
**例如'|:::||::|:|::||::|::|:|:|::|:|:|' ==> [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'] **
#### + tasking3:covertCode
**input:**Array<br>
**output:**String<br>
**例如[':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'] ==> '123455' **
#### + tasking4:checkBit
###### legalInput test:
**input:**String<br>
**output:**String<br>
**例如'123455' ==> '123455'**
###### illegalInput test:
**input:**String<br>
**output:**String<br>
**例如 '123456'==> 'wrongCode'**

### 集成测试(integration test)：
#### + tasking:covertBarcodeToCode
**input:**String<br>
**output:**String<br>
**例如'|:::||::|:|::||::|::|:|:|::|:|:|' ==> '12345'**



