# 项目分为两部分
### 1.由邮编转化为条形码(code-barcode)

#### 单元测试(unit test)：
##### + tasking1:validateCode
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

##### + tasking2:addCheckBit
**scheduled time:**20min<br>
**use time:**15min<br>
**reason:**哦好吧我也不知道为神码<br><br>
**input:**String<br>
**output:**String<br>
**例如 '12345'==>'123455' **

##### + tasking3:covertBarcodes
**scheduled time:**<br>
**use time:**<br>
**reason:**<br><br>
**input:**<br>
**output:**<br>
**例如 ==> **

#### 集成测试(integration test)：
##### + tasking:convertCodeToBarcode
**scheduled time:**<br>
**use time:**<br>
**reason:**<br><br>
**input:**<br>
**output:**<br>
**例如 ==> **

### 2.由条形码转化为邮编(barcode-code)

#### 单元测试(unit test)：

##### + tasking1:validateBarcode
###### legalInput test:
**input:**<br>
**output:**<br>
**例如 ==> **
###### illegalInput test:
**input:**<br>
**output:**<br>
**例如 ==> **
##### + tasking2:covertBarcodeArray
**input:**<br>
**output:**<br>
**例如 ==> **
##### + tasking3:checkBit
###### legalInput test:
**input:**<br>
**output:**<br>
**例如 ==> **
###### illegalInput test:
**input:**<br>
**output:**<br>
**例如 ==> **

#### 集成测试(integration test)：
##### + tasking:covertBarcodeToCode
**input:**<br>
**output:**<br>
**例如 ==> **



