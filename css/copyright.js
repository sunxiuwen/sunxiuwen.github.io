function copyright()
{
	var xhr = null;
    if(window.XMLHttpRequest)
		xhr = new window.XMLHttpRequest();
	else	// ie
		xhr = new ActiveObject("Microsoft")

	// ͨ��get�ķ�ʽ����ǰ�ļ�
    xhr.open("get","/");
    xhr.send(null);
	
    // ��������״̬�仯
    xhr.onreadystatechange = function()
	{
		var time = null, curYear = null;
		if(xhr.readyState===2)
		{
			// ��ȡ��Ӧͷ���ʱ���
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
