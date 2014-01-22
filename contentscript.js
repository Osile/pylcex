/*
The MIT License (MIT)

Copyright (c) 2014 Marvin Oßwald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
console.log('pyLCEX 2 is ready');

chrome.runtime.onMessage.addListener(function(req, sender, sendRes){
	if (req.greeting == 'openmodal'){
		console.log('Try to open a modal');
		$("body").append('<div id="modal">'+
			'<div class="panel panel-default">'+
			'  <div class="panel-heading">'+
			'    <h3 class="panel-title">Add links</h3>'+
			'  </div>'+
			'  <div class="panel-body">'+
			'    '+
			'  </div>'+
			'</div>'+

			'</div>');
		$('#modal').easyModal();
		$('#modal').trigger('openModal');
	}
});