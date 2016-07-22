# 项目分为两部分
### 1.由邮编转化为条形码(code-barcode)

#### 单元测试(unit test)：
##### + tasking1:validateCode
###### legalInput test:
input:code:String br/
output:formatCode:String
###### illegalInput test:
input:
output:
##### + tasking2:addCheckBit
input:
output:
##### + tasking3:covertBarcodes
input:
output:

#### 集成测试(integration test)：
##### + tasking:convertCodeToBarcode
input:
output:

### 2.由条形码转化为邮编(barcode-code)

#### 单元测试(unit test)：

##### + tasking1:validateBarcode
###### legalInput test:
input:
output:
###### illegalInput test:
input:
output:
##### + tasking2:covertBarcodeArray
input:
output:
##### + tasking3:checkBit
###### legalInput test:
input:
output:
###### illegalInput test:
input:
output:

#### 集成测试(integration test)：
##### + tasking:covertBarcodeToCode
input:
output:



