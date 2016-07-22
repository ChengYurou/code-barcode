# 项目分为两部分
### 1.由邮编转化为条形码(code-barcode)

#### 单元测试(unit test)：
##### + tasking1:validateCode
###### legalInput test:
**input:**<br> code:String<br>
**output:**<br>formatCode:String<br>例如：'45056-1234' ==> '450561234'
###### illegalInput test:
input:<br>
output:<br>
##### + tasking2:addCheckBit
input:<br>
output:<br>
##### + tasking3:covertBarcodes
input:<br>
output:<br>

#### 集成测试(integration test)：
##### + tasking:convertCodeToBarcode
input:<br>
output:<br>

### 2.由条形码转化为邮编(barcode-code)

#### 单元测试(unit test)：

##### + tasking1:validateBarcode
###### legalInput test:
input:<br>
output:<br>
###### illegalInput test:
input:<br>
output:<br>
##### + tasking2:covertBarcodeArray
input:<br>
output:<br>
##### + tasking3:checkBit
###### legalInput test:
input:<br>
output:<br>
###### illegalInput test:
input:<br>
output:<br>

#### 集成测试(integration test)：
##### + tasking:covertBarcodeToCode
input:<br>
output:<br>



