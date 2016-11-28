# jquery-fuzzyQuery
input-模糊查询-封装

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>模糊查询</title>
    <style>
    .detail li{ list-style:none;}
    .detail{position: absolute; margin-top:-2px;}
    .detail #suggest{ height: 181px;overflow-y: auto;background:none repeat scroll 0 0 #FFFFFF; border:1px solid #CCCCCC; left:30px; margin:0; overflow-x:hidden; display:none; padding:0;  text-align:left; top:142px; visibility:visible; width:100% ;z-index:1}
    .detail .note,.detail .item{ clear: both; color: #333; cursor: pointer; font-size: 12px; height: 32px; line-height: 32px; list-style: none outside none;  padding-left: 20px; white-space: nowrap;}
    .detail .active{ white-space:nowrap; clear:both; color:#333; cursor:pointer; font-size:12px; height: 32px; line-height: 32px; list-style:none outside none;  padding-left:20px; background:none repeat scroll 0% 0% #F6F7F8;}
    </style>
</head>

<body>
    <input id="corpName" name="cpName"  autocomplete="off" style="border: solid 1px;border-color: #ccc;width: 280px" />
    <input type="hidden" id="aaaa">
    <div class="detail" style="z-index: 100;margin:0px;width: 100%">
        <ul id="suggest">
            <!-- <li corpid="${relation.cpId}" corpname="${relation.corpName}" class="item">${relation.corpName}</li> -->
            <li corpid="1" corpname="1111111">1111111</li>
            <li corpid="2" corpname="2222222">2222222</li>
            <li corpid="3" corpname="3333333">3333333</li>
        </ul>
    </div>
    <script src="jQuery v1.11.3.min.js"></script>
    <script src="jquery-fuzzyQuery.js"></script>
    <script>
        var s1 = new Suggest("corpName","aaaa","suggest");;
        s1.init() //执行初始化函数
    </script>
</body>

</html>
