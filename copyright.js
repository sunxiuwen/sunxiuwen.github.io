function copyright()
{
	var xhr = null;
    if(window.XMLHttpRequest)
		xhr = new window.XMLHttpRequest();
	else	// ie
		xhr = new ActiveObject("Microsoft")

	// 通过get的方式请求当前文件
    xhr.open("get","/");
    xhr.send(null);
	
    // 监听请求状态变化
    xhr.onreadystatechange = function()
	{
		var time = null, curYear = null;
		if(xhr.readyState===2)
		{
			// 获取响应头里的时间戳
			time = xhr.getResponseHeader("Date");
			// console.log(xhr.getAllResponseHeaders())
			curYear = new Date(time).getFullYear();
			
			var init = 2018
			var strcopy = init;
			if(curYear > init)
				strcopy = init + "-" + curYear
		
			document.getElementById('copyright').innerText = strcopy
		}
    }
}
window.onload = copyright;
