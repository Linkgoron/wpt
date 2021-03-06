const testcases = [
  {config_input: {}, config_value: {dropElements: null}, value: "test", result: "test", message: "string"},
  {config_input: {}, config_value: {dropElements: null}, value: "<b>bla</b>", result: "<b>bla</b>", message: "html fragment"},
  {config_input: {}, config_value: {dropElements: null}, value: "<a<embla", result: "", message: "broken html"},
  {config_input: {}, config_value: {dropElements: null}, value: {}, result: "[object Object]", message: "empty object"},
  {config_input: {}, config_value: {dropElements: null}, value: 1, result: "1", message: "number"},
  {config_input: {}, config_value: {dropElements: null}, value: 000, result: "0", message: "zeros"},
  {config_input: {}, config_value: {dropElements: null}, value: 1+2, result: "3", message: "arithmetic"},
  {config_input: {}, config_value: {dropElements: null}, value: "", result: "", message: "empty string"},
  {config_input: {}, config_value: {dropElements: null}, value: undefined, result: "undefined", message: "undefined"},
  {config_input: {}, config_value: {dropElements: null}, value: null, result: "null", message: "null"},
  {config_input: {}, config_value: {dropElements: null}, value: "<html><head></head><body>test</body></html>", result: "test", message: "document"},
  {config_input: {}, config_value: {dropElements: null}, value: "<div>test", result: "<div>test</div>", message: "html without close tag"},
  {config_input: {}, config_value: {dropElements: null}, value: "<script>alert('i am a test')<\/script>", result: "", message: "scripts"},
  {config_input: {}, config_value: {dropElements: null}, value: "<p onclick='a= 123'>Click.</p>", result: "<p>Click.</p>", message: "onclick scripts"},
  {config_input: {test: 123}, config_value: {dropElements: null}, value: "test", result: "test", message: "invalid config_input"},
  {config_input: {dropElements: []}, config_value: {dropElements:[]}, value: "test", result: "test", message: "empty dropElements list"},
  {config_input: {dropElements: ["div"]}, config_value: {dropElements:["DIV"]}, value: "<div>test</div><c>bla", result: "<c>bla</c>", message: "test html without close tag with dropElements list ['div']"},
  {config_input: {dropElements: ["script"]}, config_value: {dropElements:["SCRIPT"]}, value: "<script>alert('i am a test')<\/script>", result: "", message: "test script with [\"script\"] as dropElements list"},
  {config_input: {dropElements: ["test", "i"]}, config_value: {dropElements:["TEST","I"]}, value: "<div>balabala<i>test</i></div><test>t</test>", result: "<div>balabala</div>", message: "dropElements list [\"test\", \"i\"]}"},
  {config_input: {dropElements: ["I", "AM"]}, config_value: {dropElements:["I", "AM"]}, value: "<div>balabala<am>test</am></div>", result: "<div>balabala</div>", message: "dropElements list [\"I\", \"AM\"]}"},
  {config_input: {dropElements: ["am", "p"]}, config_value: {dropElements:["AM","P"]}, value: "<div>balabala<i>i</i><p>t</p><test>a</test></div>", result: "<div>balabala<i>i</i><test>a</test></div>", message: "dropElements list [\"am\", \"p\"]}"},
  {config_input: {dropElements: [123, [], "test", "i"]}, config_value: {dropElements:["123","","TEST","I"]}, value: "<div>balabala<i>test</i></div><test>t</test>", result: "<div>balabala</div>", message: "dropElements list with invalid values}"}
];
