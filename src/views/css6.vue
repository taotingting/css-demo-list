<template>
  <div class="css2">
	<h2>xxxxxxxxxxxxxxxxx审批表</h2>
	<h3>编号：</h3>
	<table border="1">
		<tr>
			<td width="70">姓名</td>
			<td width="50">雨之战国</td>
			<td width="50">曾用名</td>
			<td width="30">无</td>
			<td width="40">性别</td>
			<td width="30">男</td>
			<td width="40">民族</td>
			<td width="40">汉族</td>
			<td width="100" rowspan="3"><img src="../assets/logo.png"></td>
		</tr>
		<tr>
			<td>出生地</td>
			<td colspan="3">浙江省宁波市</td>
			<td colspan="2">出生日期</td>
			<td colspan="2">1992.1.18</td>
		</tr>
		<tr class="doubleH">
			<td>文化程度</td>
			<td>本科</td>
			<td>婚 姻 状  况</td>
			<td>未婚</td>
			<td colspan="2">身份证号码</td>
			<td colspan="2">330225199201180031</td>
		</tr>
		<tr class="doubleH">
			<td colspan="2">出入境证件名称 
				及   号   码</td>
			<td  colspan="7">
				中国普通护照  E88888888
			</td>
		</tr>
		<tr  class="doubleH">
			<td colspan="2">工 作 单 位</td>
			<td  colspan="4">无</td>
			<td >电话</td>
			<td  colspan="2">无</td>
		</tr>
		<tr  class="doubleH">
			<td colspan="2">现  住  址</td>
			<td  colspan="4">浙江省宁波市象山县xxxxxxxxxxxxxxxxxx</td>
			<td >电话</td>
			<td  colspan="2">18812345678</td>
		</tr>
		<tr>
			<td colspan="2">户口所在地</td>
			<td  colspan="7">浙江省宁波市象山县xxxxxxxxxxxxxxxxxx</td>
		</tr>
		<tr>
			<td colspan="2">期限</td>
			<td  colspan="7">2015年11月20日 至 2016年11月90日</td>
		</tr>
		<tr class="doubleH">
			<td colspan="2">事由</td>
			<td  colspan="7">xxxxx xxxx xxxxx xxxx xxxxx xxxx xxxxx xxxx xxxxx xxxx</td>
		</tr>
		<tr>
			<td colspan="2">填表日期</td>
			<td  colspan="7">2018年11月20日</td>
		</tr>
		<tr  class="doubleH">
			<td colspan="2">现  住  址</td>
			<td colspan="3">宁波机场xxxxxxxxxx</td>
			<td colspan="2">经办人员</td>
			<td  colspan="2">18812345678</td>
		</tr>
		<tr class="doubleH">
			<td colspan="2">xxxx意见</td>
			<td  colspan="7"></td>
		</tr>
		<tr class="doubleH">
			<td colspan="2">xxxx意见</td>
			<td  colspan="7"></td>
		</tr>
	</table>
  </div>
</template>
<style lang="scss" scoped>
	h2{
		margin:0 auto;
		text-align: center;
	}
	h3{
		text-align: center;
		margin-left: 240px
	}
	table{
		border-collapse:collapse;
		/* text-align: center; */
		table-layout:fixed;
		word-wrap:break-word;
		word-break:break-all; 
		margin: 0 auto;
		width: 680px
	}
	td{
		padding:0 14px;
		height: 40px;
	}
	img{
		width:100%;
		height: auto;
	}
	tr.doubleH td{
		height: 80px;
	}
</style>
